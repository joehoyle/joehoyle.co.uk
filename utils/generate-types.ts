import { pascalCase } from "https://deno.land/x/case@2.1.1/mod.ts";
import { Project, TypeAliasDeclarationStructure, Writers, StructureKind, PropertySignatureStructure, WriterFunction } from "https://deno.land/x/ts_morph@15.1.0/mod.ts";

type JsonSchemaPropertyBase = {
	enum?: string[] | Record<string, unknown>[],
	description?: string,
}

type JsonSchemaArrayProperty = {
	type: 'array',
	items?: JsonSchemaProperty,
}

type JsonSchemaStringProperty = {
	type: 'string',
}

type JsonSchemaNumberProperty = {
	type: 'number',
}

type JsonSchemaIntegerProperty = {
	type: 'integer' | 'int',
}

type JsonSchemaBooleanProperty = {
	type: 'boolean',
}

type JsonSchemaBoolProperty = {
	type: 'bool',
}

type JsonSchemaNullProperty = {
	type: 'null',
}

type JsonSchemaMultipleTypesProperty = {
	type: ('string' | 'number' | 'null' | 'boolean' | 'integer' | 'array' | 'int')[],
}

type JsonSchemaObjectProperty = {
	type: 'object',
	properties?: {
		[ name: string ]: JsonSchemaProperty
	}
}

type JsonSchemaProperty = ( JsonSchemaArrayProperty | JsonSchemaStringProperty | JsonSchemaNumberProperty | JsonSchemaBooleanProperty | JsonSchemaObjectProperty | JsonSchemaNullProperty | JsonSchemaIntegerProperty | JsonSchemaMultipleTypesProperty | JsonSchemaBoolProperty ) & JsonSchemaPropertyBase;

type JsonSchemaObject = {
	title: string,
	type: 'object',
	properties: {
		[ property: string ]: JsonSchemaProperty,
	}
}

type RestBaseResponse = {
	routes: {
		[ route: string ]: RestRouteeResponse,
	}
}

type RestRouteEndpoint = {
	methods: ( 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH' )[],
	args: {
		[ arg: string ]: {
			type: 'string' | 'number' | 'null' | 'boolean' | 'integer' | 'int' | 'array',
			description?: string,
			required?: boolean,
		}
	},
}

type RestRouteeResponse = {
	schema: JsonSchemaObject | [], // who knows why, but this can be an empty array.
	methods: ( 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH' )[],
	namespace: string,
	endpoints: RestRouteEndpoint[]
	_links?: {
		[ name: string ]: {
			href: string,
		}[],
	}
}

type Warning = {
	message: string,
}


export async function generateTypes( siteUrl: string ) : Promise<{ code: string, warnings: Warning[] }> {
	const project = new Project( {
		useInMemoryFileSystem: true,
	} );

	const apiTypesFile = project.createSourceFile("types.ts", undefined, { overwrite: true } );
	const requestTypesFile = project.createSourceFile("requestTypes.ts", undefined, { overwrite: true } );

	const url = `${siteUrl}?rest_route=/&context=help`;
	const request = await fetch( url );
	if ( request.status > 299 ) {
		throw new Error( `Unable to fetch site, recieved response code ${ request.status }.` );
	}
	const response = await request.json() as RestBaseResponse

	const warnings: Warning[] = [];

	Object.entries( response.routes ).forEach( ( [ routePath, route ] ) => {
		if ( ! route.schema ) {
			warnings.push({
				message: `No "schema" property present for route ${ routePath }, skipping.`
			});
			return;
		}
		if ( Array.isArray( route.schema ) ) {
			warnings.push({
				message: `"schema"" property for route ${ routePath } is an array, not an object.`
			});
			return;
		}

		const type = jsonSchemaToType( route.schema );
		if ( type && ! apiTypesFile.getTypeAlias( type.name ) ) {
			type.docs = [
				`\nObject type for the "${ route.schema.title }" object in the route ${ routePath }.`,
			];
			apiTypesFile.addTypeAlias( type );
		}

		// Heuristic for the object base endpoint
		if ( route.methods.length === 2 && route.methods.indexOf( 'POST' ) > -1 && route.methods.indexOf( 'GET' ) > -1 ) {
			// Create request params type
			route.endpoints.forEach( endpoint => {
				const type = endpointArgsToType( endpoint, route, routePath );
				if ( type ) {
					requestTypesFile.addTypeAlias( type );
				}
			} );
		}
	} );

	apiTypesFile.formatText();
	requestTypesFile.formatText();

	return {
		code: apiTypesFile.getFullText() + "\n\n" + requestTypesFile.getFullText(),
		warnings,
	};
}

function endpointArgsToType( endpoint: RestRouteEndpoint, route: RestRouteeResponse, routePath: string ) : TypeAliasDeclarationStructure | undefined {
	if ( Array.isArray( route.schema ) ) {
		return;
	}

	let name = '';
	if ( JSON.stringify( endpoint.methods ) === JSON.stringify( [ 'GET' ] ) ) {
		name = `Get${ pluralize( pascalCase( route.schema.title ) ) }RequestArguments`;
	} else if ( JSON.stringify( endpoint.methods ) === JSON.stringify( [ 'POST' ] ) ) {
		name = `Create${ pascalCase( route.schema.title ) }RequestArguments`;
	}

	if ( ! name ) {
		console.warn( `Unable to make name for ${ route }` );
		return;
	}

	return {
		name,
		kind: StructureKind.TypeAlias,
		isExported: true,
		type: Writers.objectType( {
			properties: Object.entries( endpoint.args ).map( ( [ propertyName, property ] ) => {
				const prop = jsonSchemaPropertyToType( propertyName, property );
				if ( ! property.required ) {
					prop.hasQuestionToken = true;
				}
				return prop;
			}),
		} ),
		docs: [
			`\nEndpoint request arguments for the ${ endpoint.methods } ${ routePath } route.`,
		]
	}
}

function jsonSchemaToType( schema: JsonSchemaObject ) : TypeAliasDeclarationStructure | undefined {
	if ( Array.isArray( schema ) ) {
		return;
	}
	if ( ! schema.title ) {
		console.warn( `No title found for item ${ JSON.stringify( schema ) }`);
		return;
	}

	return {
		name: pascalCase( schema.title ),
		kind: StructureKind.TypeAlias,
		isExported: true,
		type: Writers.objectType( {
			properties: Object.entries( schema.properties ).map( ( [ propertyName, property ] ) => {
				return jsonSchemaPropertyToType( propertyName, property );
			}),
		} ),
	}
}

function jsonSchemaPropertyToType( name: string, property: JsonSchemaProperty ) : PropertySignatureStructure {
	return {
		name: sanitizeTypeScriptPropertyName( name ),
		type: jsonSchemaPropertyValueToType( property ),
		kind: StructureKind.PropertySignature,
		docs: [ property.description || '' ],
	}
}

function jsonSchemaPropertyValueToType( property: JsonSchemaProperty ) : string | WriterFunction {
	if ( Array.isArray( property.type ) ) {
		if ( property.type.length === 1 ) {
			return jsonSchemaPropertyValueToType( { ...property, type: property.type[0] } );
		}
		const types = property.type.map( type => jsonSchemaPropertyValueToType( { ...property, type } ) );
		 // @ts-ignore length is always more than 1
		return Writers.unionType( ...types );
		// return property.type.map( type => jsonSchemaPropertyValueToType( { ...property, type } ) ).join( ' | ' );
	}

	if ( property.enum ) {
		if ( ! Array.isArray( property.enum ) ) {
			console.warn( `Enum is invalid ${ property }`);
		} else {
			return property.enum.map( getLiteralTypeScriptValueforJsonSchemaValue ).join( ' | ' );
		}
	}

	switch ( property.type ) {
		case 'string':
			return 'string';
		case 'null' :
			return 'null';
		case 'boolean':
		case 'bool':
			return 'boolean';
		case 'number':
		case 'integer':
		case 'int':
			return 'number';
		case 'object':
			if ( ! property.properties ) {
				return 'Record<string, unknown>';
			}
			return Writers.objectType( {
				//name: 'unknown',
				properties: Object.entries( property.properties ).map( ( [ propertyName, property ] ) => {
					return jsonSchemaPropertyToType( propertyName, property );
				}),
			} );
		case 'array':
			if ( ! property.items ) {
				return 'unknown[]';
			}
			return ( write ) => {
				const writer = jsonSchemaPropertyValueToType( property.items );
				if ( typeof writer === 'string' ) {
					write.writeLine( writer + '[]' );
				} else {
					writer( write );
					write.write('[]');
				}
			}
		default:
			console.warn( `Unknown type ${ property.type }` ); // @ts-ignore This should never happen.
			return 'unknown';
	}
}

function getLiteralTypeScriptValueforJsonSchemaValue( value: any ) : string {
	switch ( typeof value ) {
		case 'string':
			return `'${ value }'`;
		case 'object':
			console.log( value );
			Deno.exit();
		default:
			return value;
	}
}

function sanitizeTypeScriptPropertyName( name: string ) : string {
	if ( name.indexOf( '-' ) > -1 ) {
		return `'${ name }'`;
	}
	return name;
}

function pluralize( name: string ) : string {
	if ( name[ name.length - 1 ] === 'y' ) {
		return name.substring( 0, name.length - 1 ) + 'ies';
	}
	return name + 's';
}
