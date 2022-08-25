/** @jsx h */
import { h, JSX } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import { tw } from "@twind";
import hljs from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/es/highlight.min.js';
import ts from 'https://unpkg.com/@highlightjs/cdn-assets@11.6.0/es/languages/typescript.min.js';

type GenerateRestApiTypesResponse = {
	code: string,
	warnings: {
		message: string,
	}[],
}
interface Props {

}

export default function WPRestApiTypeScriptGenerator(props: Props) {
	const [siteUrl, setSiteUrl] = useState('https://');
	const [isCopied, setIsCopied] = useState(false);
	const [typesFile, setTypesFile] = useState<{html: string, raw: string, warnings: { message: string }[] }>({html: '', raw: '', warnings: []});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const onSubmit = async (event: JSX.TargetedEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		setError('');
		setTypesFile({html: '', raw: '', warnings: []});
		try {
			const response = await fetch(`/api/generate-wp-rest-api-types?url=${siteUrl}`);
			const body = await response.json() as unknown as GenerateRestApiTypesResponse;

			if ( response.status > 299 ) {
				setError( body.message );
			} else {
				hljs.registerLanguage( 'typescript', ts );
				const html = hljs.highlight( body.code, {language: 'typescript'}).value
				setTypesFile({
					html,
					raw: body.code,
					warnings: body.warnings,
				});
			}
		} catch (e) {
			setError(e.message);
		}

		setLoading(false);
	}

	const onCopy = async () => {
		await navigator.clipboard.writeText( typesFile.raw );
		setIsCopied( true );
		setTimeout(() => {
			setIsCopied( false );
		}, 1000);
	}

	return (
		<div className={tw`flex w-full flex-col`}>
			<form className={tw`mb-4 self-center`} onSubmit={e => onSubmit(e)}>
				<label for="site-url" className={tw`mb-1 block font-medium text-gray-700`}>Site URL</label>
				<div className={tw`flex space-x-4`}>
					<input type="url" required name="site-url" id="site-url" className={tw`py-3 px-5 shadow focus:ring-indigo-500 focus:border-indigo-500 block w-96 border-gray-300 rounded-md`} placeholder="https://" value={siteUrl} onInput={e => setSiteUrl(e.target.value)} />
					<button type="submit" className={tw`shadow py-3 px-5 rounded bg-blue-400 text-white font-medium active:bg-blue-500`}>Generate Types</button>
				</div>
				{ error && (
					<p className={tw`mt-4 ring-1 ring-red-400 bg-red-100 text-red-900 p-4 rounded`}>{ error }</p>
				) }
			</form>

			<div className={tw`relative`}>
				<button className={tw`absolute ring-1 text-sm ring-gray-100 rounded-full py-2 px-5 top-2 right-2 hover:shadow hover:ring-gray-200`} onClick={ onCopy }>{ isCopied ? 'Copied!': 'Copy to Clipboard' }</button>
				{ loading && (
					<div className={tw`inset-0 absolute flex items-center justify-center bg-white bg-opacity-80 z-10 fill-blue-600`}>
						<svg aria-hidden="true" class={tw`w-8 h-8 text-white animate-spin fill-blue-600`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
							<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
						</svg>
					</div>
				) }
				<pre className={tw`text-sm bg-white p-6 overflow-auto h-96`} dangerouslySetInnerHTML={{__html: typesFile.html }} />
			</div>

			{ typesFile.warnings.length > 1 && (
				<div className={tw`bg-yellow-50 p-5 mt-5 text-sm`}>
					<h3 className={tw`font-semibold mb-4`}>Warnings</h3>
					<ul className={tw`list-circle list-inside`}>
						{ typesFile.warnings.map( ( warning, index ) => (
							<li key={ index }>{ warning.message }</li>
						) ) }
					</ul>
				</div>
			) }
		</div>

	);
}
