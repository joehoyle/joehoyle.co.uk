import { generateTypes } from '../../utils/generate-types.ts';

export const handler = async (req: Request): Promise<Response> => {
	const url = new URL(req.url);
	const siteUrl = url.searchParams.get('url');
	if ( ! siteUrl ) {
		return new Response('No url param provided', {
			status: 400,
		});
	}
	try {
		const types = (await generateTypes(siteUrl)) || '';
		return new Response(types.code, {
			headers: {
				'Content-Type': 'application/typescript',
			},
		});
	} catch ( e ) {
		return new Response( JSON.stringify({
			message: e.message,
		}), {
			status: 500,
		});
	}
};
