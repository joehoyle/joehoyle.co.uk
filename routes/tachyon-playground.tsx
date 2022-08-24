/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { PostExcerpt } from "../components/PostExcerpt.tsx";
import { Footer } from "../components/Footer.tsx";
import TachyonPlayground from "../islands/TachyonPlayground.tsx";

export default function Home() {
	return (
		<div className={tw`flex flex-col items-center bg-warmGray-100 min-h-screen`}>
			<Head>
				<title>Tachyon Playground - Joe Hoyle</title>
			</Head>
			<a href="/">
				<img className={ tw`rounded-full w-24 shadow-lg mt-12 ring-offset-2 ring-2 ring-warmGray-300` } src="https://en.gravatar.com/userimage/6103/8089514d8a2badb1b3073015e3bc8768.jpg?size=200" />
				<h1 className={ tw`mt-4 uppercase text-gray-500 tracking-wide mb-10` }>Joe Hoyle</h1>
			</a>

			<h2 className={tw`text-2xl mb-6`}>Tachyon Playground</h2>
			<div className={tw`text-sm max-w-3xl prose`}>
				<p><a href="https://github.com/humanmade/tachyon/">Tachyon</a> is an on-demand image resizing service. This is a tool to experiment with Tachyon image resizing parameter in real-time.</p>
				<p>Tachyon runs in AWS Lambda on Node.js, and is a standard part of the <a href="https://www.altis-dxp.com/cloud/">Altis Cloud</a> WordPress hosting platform.</p>
			</div>

			<div className={tw`max-w-4xl my-6`}>
				<TachyonPlayground />
			</div>

			<Footer />
		</div>
	);
}
