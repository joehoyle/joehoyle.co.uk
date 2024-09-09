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
		<div className={tw`flex flex-col items-center bg-warmGray-100 p-5 min-h-screen`}>
			<Head>
				<title>Joe Hoyle</title>
				<meta name="description" content="Personal website of Joe Hoyle, co-founder of Human Made & Altis."></meta>
			</Head>
			<Header />

			<PostExcerpt
				title="Moving to Quebec"
				url="/moving-to-quebec/"
				content="Recently I moved to the beautiful countryside of Quebec, Canada. That means working from a new, non-european time zone, so more crossover with my americas colleagues. It should also mean easier travel to North American ervents and meetups, the first of which will be WordCamp US in Septemeber 2024!"
			/>

			<PostExcerpt
				title="Tough Month at Human Made"
				url="/2023-01-tough-month-at-human-made/"
				content="The passed few weeks have been a whilwind at Human Made. We made the decision to downsize the company to meet the customer demand we have been able to generate, rather than what we had planned for."
			/>

			<PostExcerpt
				title="PHP-Deno: Learning Rust the Hard Way"
				url="/learning-rust-the-hard-way/"
				content="For several years I've been interested in the edge-computing “v8 isolates everywhere” approach to building web applications and the like. From a software perspective, I think the idea is enticing: lightweight JavaScript that is secure, simple and fast. Easy to deploy, cheap and portable."
			/>

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
