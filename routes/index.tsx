/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
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
			</Head>
			<Header />

			<PostExcerpt
				title="Tachyon Playground"
				url="/tachyon-playground/"
				content="Tachyon is an on-demand image resizing service. This is a tool to experiment with Tachyon image resizing parameter in real-time."
			/>

			<Footer />
		</div>
	);
}
