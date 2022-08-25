/** @jsx h */
/** @jsxFrag Fragment */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { PostExcerpt } from "../components/PostExcerpt.tsx";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";

export default function Home() {
	return (
		<div className={tw`flex flex-col items-center bg-warmGray-100 min-h-screen`}>
			<Head>
				<title>Joe Hoyle</title>
				<meta name="description" content="Personal website of Joe Hoyle, co-founder of Human Made & Altis."></meta>
			</Head>
			<Header />

			<PostExcerpt
				title="WP REST API TypeScript Generator"
				url="/wp-rest-api-typescript/"
				content="A tool to generate TypeScript types file from your site's WordPress REST API. Enter your WordPress site's URL and download the type definitions."
			/>

			<PostExcerpt
				title="Tachyon Playground"
				url="/tachyon-playground/"
				content="Tachyon is an on-demand image resizing service. This is a tool to experiment with Tachyon image resizing parameter in real-time."
			/>

			<Footer />
		</div>
	);
}
