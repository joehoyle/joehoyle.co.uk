import { generate } from './generate-types.ts';

const { code, warnings } = await generate( 'https://humanmade.com');

warnings.map( warning => console.warn( warning.message ) );

console.log( code );
