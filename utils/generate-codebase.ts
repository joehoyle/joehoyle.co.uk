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
	type: 'integer',
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
	type: ('string' | 'number' | 'null' | 'boolean' | 'integer' | 'array')[],
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
			type: 'string' | 'number' | 'null' | 'boolean' | 'integer' | 'array',
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


// initialize
const project = new Project({
    // Optionally specify compiler options, tsconfig.json, in-memory file system, and more here.
    // If you initialize with a tsconfig.json, then it will automatically populate the project
    // with the associated source files.
    // Read more: https://ts-morph.com/setup/
});

const apiTypesFile = project.createSourceFile("wordpressTypes.ts", null, { overwrite: true } );
const mainFile = project.createSourceFile("wordpress.ts", null, { overwrite: true } );

mainFile.addStatements( `import * as Types from './wordpressTypes.ts';
export * from './wordpressTypes.ts';` );

const url = "https://poststatus.com/?rest_route=/&context=help";
const response = ( await ( await fetch( url ) ).json() ) as RestBaseResponse;

Object.entries( response.routes ).forEach( ( [ routePath, route ] ) => {
	if ( ! route.schema ) {
		return;
	}
	if ( Array.isArray( route.schema ) ) {
		return;
	}

	const type = jsonSchemaToType( route.schema );
	if ( type && ! apiTypesFile.getTypeAlias( type.name ) ) {
		apiTypesFile.addTypeAlias( type );
	}
} );

Object.entries( response.routes ).forEach( ( [ routePath, route ] ) => {
	if ( ! route.schema ) {
		return;
	}
	if ( Array.isArray( route.schema ) ) {
		return;
	}

	// Heuristic for the object base endpoint
	if ( route.methods.length === 2 && route.methods.indexOf( 'POST' ) > -1 && route.methods.indexOf( 'GET' ) > -1 ) {
		// Create request params type

		route.endpoints.forEach( endpoint => {
			const type = endpointArgsToType( endpoint, route );
			if ( type ) {
				apiTypesFile.addTypeAlias( type );
			}
		} );

		if ( ! route._links?.self[0].href ) {
			console.warn( 'Unable to get link for endpoint' );
			return;
		}

		const getType = `Get${ pascalCase( route.schema.title ) }sRequestArguments`;
		const type = `${ pascalCase( route.schema.title ) }`
		if ( apiTypesFile.getTypeAlias( getType ) && ! mainFile.getFunction( `get${ pascalCase( route.schema.title ) }s` ) ) {
			mainFile.addFunction( {
				name: `get${ pascalCase( route.schema.title ) }s`, // @todo pluralize
				isExported: true,
				isAsync: true,
				returnType: `Promise<Types.${ type }[]>`,
				parameters: [ {
					type: `Types.${ getType }`,
					name: 'args',
					hasQuestionToken: true,
				} ],
				statements: [
					`const url = new URL( '${ route._links?.self[0].href }' );
					url.search = new URLSearchParams( args as Record<string, string> ).toString();
					const request = await ( await fetch( url ) ).json() as Types.${ type }[];
					return request;`
				]
			} );
		}


		// mainFile.addFunction( {
		// 	name: `create${ pascalCase( route.schema.title ) }`,
		// 	isExported: true,
		// 	isAsync: true,
		// 	returnType: `Promise<Types.${ pascalCase( route.schema.title ) }>`,
		// 	parameters: [],
		// } );
	}
} );

apiTypesFile.formatText();
mainFile.formatText();

await project.save();

function endpointArgsToType( endpoint: RestRouteEndpoint, route: RestRouteeResponse ) : TypeAliasDeclarationStructure | undefined {

	if ( Array.isArray( route.schema ) ) {
		return;
	}

	let name = '';
	if ( JSON.stringify( endpoint.methods ) === JSON.stringify( [ 'GET' ] ) ) {
		name = `Get${ pascalCase( route.schema.title ) }sRequestArguments`;
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
	}
}

function jsonSchemaToType( schema: JsonSchemaObject ) : TypeAliasDeclarationStructure | undefined {
	if ( Array.isArray( schema ) ) {
		return;
	}
	if ( ! schema.title ) {
		console.warn( `No title found for item ${ JSON.stringify( schema ) }`);
		// Deno.exit();
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
		// docs: [ JSON.stringify( schema, null, 4 ) ],
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
