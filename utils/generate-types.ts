import { pascalCase } from 'https://deno.land/x/case@2.1.1/mod.ts';
import { runtime } from 'https://deno.land/x/ts_morph@15.1.0/common/ts_morph_common.d.ts';
import { Project, TypeAliasDeclarationStructure, FunctionDeclarationStructure, Writers, StructureKind, PropertySignatureStructure, WriterFunction } from 'https://deno.land/x/ts_morph@15.1.0/mod.ts';

type JsonSchemaPropertyBase = {
	enum?: string[] | Record<string, unknown>[];
	description?: string;
};

type JsonSchemaArrayProperty = {
	type: 'array';
	items?: JsonSchemaProperty;
};

type JsonSchemaStringProperty = {
	type: 'string';
};

type JsonSchemaNumberProperty = {
	type: 'number';
};

type JsonSchemaIntegerProperty = {
	type: 'integer' | 'int';
};

type JsonSchemaBooleanProperty = {
	type: 'boolean';
};

type JsonSchemaBoolProperty = {
	type: 'bool';
};

type JsonSchemaNullProperty = {
	type: 'null';
};

type JsonSchemaMultipleTypesProperty = {
	type: ('string' | 'number' | 'null' | 'boolean' | 'integer' | 'array' | 'int')[];
};

type JsonSchemaObjectProperty = {
	type: 'object';
	properties?: {
		[name: string]: JsonSchemaProperty;
	};
};

type JsonSchemaProperty = (
	| JsonSchemaArrayProperty
	| JsonSchemaStringProperty
	| JsonSchemaNumberProperty
	| JsonSchemaBooleanProperty
	| JsonSchemaObjectProperty
	| JsonSchemaNullProperty
	| JsonSchemaIntegerProperty
	| JsonSchemaMultipleTypesProperty
	| JsonSchemaBoolProperty
) &
	JsonSchemaPropertyBase;

type JsonSchemaObject = {
	title: string;
	type: 'object';
	properties: {
		[property: string]: JsonSchemaProperty;
	};
};

type RestBaseResponse = {
	routes: {
		[route: string]: RestRouteResponse;
	};
	namespaces: string[],
};

type RestRouteEndpoint = {
	methods: ('POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH')[];
	args: {
		[arg: string]: {
			type: 'string' | 'number' | 'null' | 'boolean' | 'integer' | 'int' | 'array';
			description?: string;
			required?: boolean;
		};
	};
};

type RestRouteResponse = {
	schema: JsonSchemaObject | []; // who knows why, but this can be an empty array.
	methods: ('POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH')[];
	namespace: string;
	endpoints: RestRouteEndpoint[];
	_links?: {
		[name: string]: {
			href: string;
		}[];
	};
};

type Warning = {
	message: string;
};

export async function generateTypes(siteUrl: string): Promise<{ code: string; warnings: Warning[] }> {
	const project = new Project({
		useInMemoryFileSystem: true,
	});

	const apiTypesFile = project.createSourceFile('types.ts', undefined, { overwrite: true });

	const url = `${siteUrl}?rest_route=/&context=help`;
	const request = await fetch(url);
	if (request.status > 299) {
		throw new Error(`Unable to fetch site, recieved response code ${request.status}.`);
	}
	const response = (await request.json()) as RestBaseResponse;

	const { warnings, types } = getTypes(response);

	Object.values(types).forEach((type) => {
		apiTypesFile.addTypeAlias(type);
	});

	apiTypesFile.formatText();

	return {
		code: apiTypesFile.getFullText(),
		warnings,
	};
}

export async function generate(siteUrl: string): Promise<{ code: string; warnings: Warning[] }> {
	const project = new Project({
		useInMemoryFileSystem: true,
	});

	const tsFile = project.createSourceFile('sdk.ts', undefined, { overwrite: true });

	const url = `${siteUrl}?rest_route=/&context=help`;
	const request = await fetch(url);
	if (request.status > 299) {
		throw new Error(`Unable to fetch site, recieved response code ${request.status}.`);
	}
	const response = (await request.json()) as RestBaseResponse;

	const namespaces = response.namespaces;

	namespaces.forEach( namespace => {
		const namespaceRoutes = Object.keys( response.routes ).filter( path => path.indexOf( namespace ) === 1 ).reduce( ( routes, routePath ) => {
			routes[ routePath ] = response.routes[ routePath ];
			return routes;
		}, {} as { [route: string]: RestRouteResponse } );

		const types = getTypes( {
			...response,
			routes: namespaceRoutes,
		} );
		const functions = getFunctions( {
			...response,
			routes: namespaceRoutes,
		}, namespace );

		const statements = [
			...Object.values(types.types),
			...Object.values(functions.functions),
		];

		if ( statements.length === 0 ) {
			return;
		}
		if ( namespace === 'wp/v2' ) {
			tsFile.addStatements( statements );
		} else {
			tsFile.addModule( {
				name: pascalCaseWithAdditions(namespace),
				isExported: true,
				statements,
			} );
		}

	} );

	tsFile.formatText();

	return {
		code: tsFile.getFullText(),
		warnings: [],
	};
}

function getTypes(restIndex: RestBaseResponse): { types: { [type: string]: TypeAliasDeclarationStructure }; warnings: Warning[] } {
	const warnings: Warning[] = [];
	const types: { [type: string]: TypeAliasDeclarationStructure } = {};

	Object.entries(restIndex.routes).forEach(([routePath, route]) => {
		if (!route.schema) {
			warnings.push({
				message: `No "schema" property present for route ${routePath}, skipping.`,
			});
			return;
		}
		if (Array.isArray(route.schema)) {
			warnings.push({
				message: `"schema"" property for route ${routePath} is an array, not an object.`,
			});
			return;
		}

		const type = jsonSchemaToType(route.schema);
		if (type && !types[type.name]) {
			type.docs = [`\nObject type for the "${route.schema.title}" object in the route ${routePath}.`];
			types[type.name] = type;
		}

			// Create request params type
			route.endpoints.forEach((endpoint) => {
				const type = endpointArgsToType(endpoint, route, routePath);
				if (type) {
					types[type.name] = type;
				}
			});
	});

	return {
		types,
		warnings,
	};
}

function getFunctions(restIndex: RestBaseResponse, namespace: string): { functions: Record<string, FunctionDeclarationStructure>; warnings: Warning[] } {
	const warnings: Warning[] = [];
	const functions: Record<string, FunctionDeclarationStructure> = {};
	const { types } = getTypes(restIndex);

	Object.entries(restIndex.routes).forEach(([routePath, route]) => {
		if (!route.schema) {
			return;
		}
		if (Array.isArray(route.schema)) {
			return;
		}

		// const pluralName = pluralize(pascalCaseWithAdditions( routePath.substring( namespace.length + 1 ) ));

		const routeParams = routePath.match( /\?P<([^>]+)>/ ) || [];

		// Find the object base route (any routes with no params)
		if ( routeParams.length === 0 ) {
			if (!route._links?.self[0].href) {
				console.warn(`Unable to get _link for route ${ routePath } `);
				return;
			}

			const subRoutes = filterObjectByKeys( restIndex.routes, path => path.indexOf( routePath ) === 0 );

			const getType = `Get${pluralize(pascalCaseWithAdditions(route.schema.title))}RequestArguments`;
			const createType = `Create${pascalCaseWithAdditions(route.schema.title)}RequestArguments`;
			const getFunction = `get${pluralize(pascalCaseWithAdditions(route.schema.title))}`;
			const createFunction = `create${pascalCaseWithAdditions(route.schema.title)}`;
			const type = `${pascalCaseWithAdditions(route.schema.title)}`;

			if (types[type]) {
				if ( types[getType] ) {
					functions[ getFunction ] = {
						name: getFunction,
						docs: [`\nGet ${pluralize(route.schema.title)} objects from the ${routePath} route.`],
						isExported: true,
						kind: StructureKind.Function,
						isAsync: true,
						returnType: `Promise<${type}[]>`,
						parameters: [
							{
								type: `${getType}`,
								name: 'args',
								hasQuestionToken: true,
							},
						],
						statements: [
							`const url = new URL( '${route._links?.self[0].href}' );
							url.search = new URLSearchParams( args as Record<string, string> ).toString();
							const request = await ( await fetch( url ) ).json() as ${type}[];
							return request;`,
						],
					};
				} else {
					console.warn( `Unable to generate getter function for ${pluralize(route.schema.title)} as the tye ${getType} was not found.` );
				}
				if ( types[createType] ) {
					functions[ createFunction ] = {
						name: createFunction,
						docs: [`\nCreate a ${route.schema.title} object at the ${routePath} route.`],
						isExported: true,
						kind: StructureKind.Function,
						isAsync: true,
						returnType: `Promise<${type}>`,
						parameters: [
							{
								type: `${createType}`,
								name: 'properties',
								hasQuestionToken: false,
							},
						],
						statements: [
							`const url = new URL( '${route._links?.self[0].href}' );
							const request = await fetch( url, {
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify( properties ),
							} );
							const response = await request.json() as ${type};
							return response;`,
						],
					};
				} else {
					console.warn( `Unable to generate create function for ${route.schema.title} as the type ${createType} was not found.` );
				}
			} else {
				warnings.push({
					message: `Unable to find type ${getType} to generate function ${getFunction}`,
				});
			}
		}

		// Heuristic for the object single endpoint
		if (route.methods.length === 5 && route.methods.indexOf('POST') > -1 && route.methods.indexOf('GET') > -1 && route.methods.indexOf('DELETE') > -1 && route.methods.indexOf('PATCH') > -1 && route.methods.indexOf('PUT') > -1) {
			const getSingleType = `Get${pascalCaseWithAdditions(route.schema.title)}RequestArguments`;
			const getSingleFunction = `get${pascalCaseWithAdditions(route.schema.title)}`;
			const updateType = `Update${pascalCaseWithAdditions(route.schema.title)}RequestArguments`;
			const updateFunction = `update${pascalCaseWithAdditions(route.schema.title)}`;
			const deleteType = `Delete${pascalCaseWithAdditions(route.schema.title)}RequestArguments`;
			const deleteFunction = `delete${pascalCaseWithAdditions(route.schema.title)}`;
			const type = `${pascalCaseWithAdditions(route.schema.title)}`;

			if ( routePath === '/wp/v2/users/me' ) {
				return;
			}

			if (types[type]) {
				if ( types[getSingleType] ) {
					functions[ getSingleFunction ] = {
						name: getSingleFunction,
						docs: [`\nGet a ${route.schema.title} object from the ${routePath} route.`],
						isExported: true,
						kind: StructureKind.Function,
						isAsync: true,
						returnType: `Promise<${type}>`,
						parameters: [
							{
								type: `${getSingleType}`,
								name: 'args',
								hasQuestionToken: true,
							},
						],
						statements: [
							`const url = new URL( '${route._links?.self[0].href}' );
							url.search = new URLSearchParams( args as Record<string, string> ).toString();
							const request = await ( await fetch( url ) ).json() as ${type}[];
							return request;`,
						],
					};
				} else {
					console.warn( `Unable to generate single getter function for ${route.schema.title} as the tye ${getSingleType} was not found.` );
				}
				if ( types[updateType] ) {
					functions[ updateFunction ] = {
						name: updateFunction,
						docs: [`\nUpdate a ${route.schema.title} object from the ${routePath} route.`],
						isExported: true,
						kind: StructureKind.Function,
						isAsync: true,
						returnType: `Promise<${type}>`,
						parameters: [
							{
								type: `${updateType}`,
								name: 'args',
								hasQuestionToken: true,
							},
						],
						statements: [
							`const url = new URL( '${route._links?.self[0].href}' );
							url.search = new URLSearchParams( args as Record<string, string> ).toString();
							const request = await ( await fetch( url ) ).json() as ${type}[];
							return request;`,
						],
					};
				} else {
					console.warn( `Unable to generate single updater function for ${route.schema.title} as the tye ${getSingleType} was not found.` );
				}
				if ( types[deleteType] ) {
					functions[ deleteFunction ] = {
						name: deleteFunction,
						docs: [`\Delete a ${route.schema.title} object from the ${routePath} route.`],
						isExported: true,
						kind: StructureKind.Function,
						isAsync: true,
						returnType: `Promise<${type}>`,
						parameters: [
							{
								type: `${deleteType}`,
								name: 'args',
								hasQuestionToken: true,
							},
						],
						statements: [
							`const url = new URL( '${route._links?.self[0].href}' );
							url.search = new URLSearchParams( args as Record<string, string> ).toString();
							const request = await ( await fetch( url ) ).json() as ${type}[];
							return request;`,
						],
					};
				} else {
					console.warn( `Unable to generate delete function for ${route.schema.title} as the tye ${getSingleType} was not found.` );
				}
			} else {
				warnings.push({
					message: `Unable to find type ${type} to generate single functions.`,
				});
			}
		}
	});

	return {
		functions,
		warnings,
	};
}

function endpointArgsToType(endpoint: RestRouteEndpoint, route: RestRouteResponse, routePath: string): TypeAliasDeclarationStructure | undefined {
	if (Array.isArray(route.schema)) {
		return;
	}

	const routeParams = routePath.match( /\?P<([^>]+)>/ ) || [];

	let name = '';

	if (JSON.stringify(endpoint.methods) === JSON.stringify(['GET'])) {
		// A get endpoint with params is a Get single object.
		if ( routeParams.length > 0 ) {
			name = `Get${pascalCaseWithAdditions(route.schema.title)}RequestArguments`;
		} else {
			name = `Get${pluralize(pascalCaseWithAdditions(route.schema.title))}RequestArguments`;
		}
	} else if (JSON.stringify(endpoint.methods) === JSON.stringify(['POST'])) {
		name = `Create${pascalCaseWithAdditions(route.schema.title)}RequestArguments`;
	} else if (JSON.stringify(endpoint.methods.sort()) === JSON.stringify(['POST', 'PUT', 'PATCH'].sort())) {
		name = `Update${pascalCaseWithAdditions(route.schema.title)}RequestArguments`;
	} else if (JSON.stringify(endpoint.methods) === JSON.stringify(['DELETE'])) {
		name = `Delete${pascalCaseWithAdditions(route.schema.title)}RequestArguments`;
	}

	if (!name) {
		console.warn(`Unable to make name for ${route.schema.title} ${JSON.stringify(endpoint.methods)}`);
		return;
	}

	return {
		name,
		kind: StructureKind.TypeAlias,
		isExported: true,
		type: Writers.objectType({
			properties: Object.entries(endpoint.args).map(([propertyName, property]) => {
				const prop = jsonSchemaPropertyToType(propertyName, property);
				if (!property.required && routeParams.indexOf( propertyName ) === -1) {
					prop.hasQuestionToken = true;
				}
				return prop;
			}),
		}),
		docs: [`\nEndpoint request arguments for the ${endpoint.methods} ${routePath} route.`],
	};
}

function jsonSchemaToType(schema: JsonSchemaObject): TypeAliasDeclarationStructure | undefined {
	if (Array.isArray(schema)) {
		return;
	}
	if (!schema.title) {
		console.warn(`No title found for item ${JSON.stringify(schema)}`);
		return;
	}

	return {
		name: pascalCaseWithAdditions(schema.title),
		kind: StructureKind.TypeAlias,
		isExported: true,
		type: Writers.objectType({
			properties: Object.entries(schema.properties).map(([propertyName, property]) => {
				return jsonSchemaPropertyToType(propertyName, property);
			}),
		}),
	};
}

function jsonSchemaPropertyToType(name: string, property: JsonSchemaProperty): PropertySignatureStructure {
	return {
		name: sanitizeTypeScriptPropertyName(name),
		type: jsonSchemaPropertyValueToType(property),
		kind: StructureKind.PropertySignature,
		docs: [property.description || ''],
	};
}

function jsonSchemaPropertyValueToType(property: JsonSchemaProperty): string | WriterFunction {
	if (Array.isArray(property.type)) {
		if (property.type.length === 1) {
			return jsonSchemaPropertyValueToType({ ...property, type: property.type[0] });
		}
		const types = property.type.map((type) => jsonSchemaPropertyValueToType({ ...property, type }));
		// @ts-ignore length is always more than 1
		return Writers.unionType(...types);
	}

	if (property.enum) {
		if (!Array.isArray(property.enum)) {
			console.warn(`Enum is invalid ${property}`);
		} else {
			return property.enum.map(getLiteralTypeScriptValueforJsonSchemaValue).join(' | ');
		}
	}

	switch (property.type) {
		case 'string':
			return 'string';
		case 'null':
			return 'null';
		case 'boolean':
		case 'bool':
			return 'boolean';
		case 'number':
		case 'integer':
		case 'int':
			return 'number';
		case 'object':
			if (!property.properties) {
				return 'Record<string, unknown>';
			}
			return Writers.objectType({
				//name: 'unknown',
				properties: Object.entries(property.properties).map(([propertyName, property]) => {
					return jsonSchemaPropertyToType(propertyName, property);
				}),
			});
		case 'array':
			if (!property.items) {
				return 'unknown[]';
			}
			return (write) => {
				const writer = jsonSchemaPropertyValueToType(property.items);
				if (typeof writer === 'string') {
					write.writeLine(writer + '[]');
				} else {
					writer(write);
					write.write('[]');
				}
			};
		default: // @ts-ignore This should never happen.
			console.warn(`Unknown type ${property.type}`);
			return 'unknown';
	}
}

/**
 * Get the typescript type for a JSON Schema type.
 */
function getLiteralTypeScriptValueforJsonSchemaValue(value: any): string {
	switch (typeof value) {
		case 'string':
			return `'${value}'`;
		case 'object':
			console.error(value);
			Deno.exit();
		default:
			return value;
	}
}

/**
 * Sanitize a property name to be used as a typescript property name.
 */
function sanitizeTypeScriptPropertyName(name: string): string {
	if (name.indexOf('-') > -1) {
		return `'${name}'`;
	}
	return name;
}

function pluralize(name: string): string {
	if (name[name.length - 1] === 'y') {
		return name.substring(0, name.length - 1) + 'ies';
	}
	if (name[name.length - 1] === 's') {
		return name;
	}
	return name + 's';
}

function pascalCaseWithAdditions( name: string ) : string {
	return pascalCase(name).replace('Wp', 'WP');
}

function filterObjectByKeys( object: Record<string, any>, predicate: (key: string) => boolean ) {
	return Object.keys( object ).filter( predicate ).reduce( ( newObject, key ) => {
		newObject[ key ] = object[ key ];
		return newObject;
	}, {} as Record<string, any> );
}
