/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

type Props = {
	title: string,
	url: string,
	content: string,
}

export function PostExcerpt( props: Props ) {
	return (
		<div className={tw`max-w-3xl max-auto p-6 shadow-lg rounded-lg ring-1 ring-gray-200 flex flex-col mb-12`}>
			<h2 className={tw`w-full text-l font-semibold mb-6 text-center`}><a href={ props.url }>{ props.title }</a></h2>
			<p className={tw`text-sm`}>{ props.content }</p>
			<a href={ props.url } className={ tw`inline-flex self-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 hover:bg-gray-50 mt-4 align-center`}>Read More</a>
		</div>
	);
}
