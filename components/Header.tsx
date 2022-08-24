/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function Header() {
	return (
		<a href="/">
			<img width="96" height="96" role="presentation" className={ tw`rounded-full w-24 shadow-lg mt-12 ring-offset-2 ring-2 ring-warmGray-300` } src="https://en.gravatar.com/userimage/6103/8089514d8a2badb1b3073015e3bc8768.jpg?size=200" />
			<h1 className={ tw`mt-4 uppercase text-gray-500 tracking-wide mb-10` }>Joe Hoyle</h1>
		</a>
	);
}

