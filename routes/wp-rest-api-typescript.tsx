/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import WPRestApiTypeScriptGenerator from "../islands/WPRestApiTypeScriptTypeGenerator.tsx";

export default function WP_REST_API_TypeScript() {
	return (
		<div className={tw`flex flex-col items-center bg-warmGray-100 min-h-screen`}>
			<Head>
				<title>WP REST API TypeScript Generator - Joe Hoyle</title>
				<meta name="description" content="This is a tool to experiment with Tachyon image resizing parameter in real-time."></meta>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/github.min.css"></link>
			</Head>
			<Header />

			<h2 className={tw`text-2xl mb-6`}>WP REST API TypeScript Generator</h2>
			<div className={tw`text-sm max-w-3xl prose`}>
				<p>This is a tool to generate TypeScript Types for all objects and request arguments from your site's WordPress REST API. As each WordPress site can have it's own set of endpoints and object types (provided by plugins and custom API endpoints), it's often neccesary to have the types specific to the site's API rather than a generic set of WordPress types.</p>
				<p>The generator works by crawling your WordPress site's REST API base and inspecting all <code>schema</code> properties of all endpoints. Enter your WordPress site URL below to generate types.</p>
				<p>Currently this supports creating TypeScript types for all object types (such as <code>post</code>, <code>page</code>, etc), and object base route request arguments, such as <code>wp/v2/posts</code>.</p>
				<p>Object types are transformed from snake-case to pascal case, for example <code>menu-item</code> becomes <code>type MenuItem</code>.</p>
				<p>Object base route request arguments are similarily converted. The endpoint <code>GET /wp/v2/posts</code> will generate a type <code>GetPostsRequestArguments</code> and <code>POST /wp/v2/pages</code> will generate a TypeScript type of <code>CreatePostRequestArguments</code>.</p>
				<p>In the future I'd like to release this as a package so developers can run it locally too.</p>
			</div>

			<div className={tw`max-w-4xl w-full my-6`}>
				<WPRestApiTypeScriptGenerator />
			</div>

			<Footer />
		</div>
	);
}
