/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import { asset } from "$fresh/runtime.ts";

export default function MovingToQuebec() {
	return (
		<div className={tw`flex flex-col items-center bg-warmGray-100 min-h-screen p-5`}>
			<Head>
				<title>Moving to Quebec - Joe Hoyle</title>
				<meta name="description" content="If I've learned anything in 18 years of programming (and primarily debugging) it's “never give up”."></meta>
				<meta property="og:image" content={asset("/quebec.jpg")} />
			</Head>
			<Header />

			<h2 className={tw`text-2xl mb-6`}>Moving to Quebec</h2>
			<div className={tw` max-w-3xl prose`}>
				<p className={tw`text-center text-gray-500`}>Septemeber, 2024</p>
				<p className={tw`text-center`}>
					<img className={tw`max-w-sm p-5 inline`} src={asset("/quebec.jpg")} alt="Image showing Rust, PHP, Deno and V8 logos smashed together." />
				</p>
				<p>Recently I moved to the beautiful countryside of Quebec, Canada. That means working from a new, non-european time zone, so more crossover with my americas colleagues. It should also mean easier travel to North American ervents and meetups, the first of which will be WordCamp US in Septemeber 2024!</p>
				<p>If you're going to be in Quebec, let me know!</p>
			</div>
			<Footer />
		</div>
	);
}
