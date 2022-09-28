/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";
import TachyonPlayground from "../islands/TachyonPlayground.tsx";
import { Header } from "../components/Header.tsx";
import { asset } from "$fresh/runtime.ts";

export default function LearningRustTheHardWay() {
	return (
		<div className={tw`flex flex-col items-center bg-warmGray-100 min-h-screen p-5`}>
			<Head>
				<title>Learning Rust the Hard Way - Joe Hoyle</title>
				<meta name="description" content="If I've learned anything in 18 years of programming (and primarily debugging) it's “never give up”."></meta>
				<meta property="og:image" content={asset("/learning-rust-the-hard-way.png")} />
			</Head>
			<Header />

			<h2 className={tw`text-2xl mb-6`}>PHP-Deno: Learning Rust the Hard Way</h2>
			<div className={tw` max-w-3xl prose`}>
				<p className={tw`text-center`}>
					<img className={tw`max-w-sm p-5 inline`} src={asset("/learning-rust-the-hard-way.png")} alt="Image showing Rust, PHP, Deno and V8 logos smashed together." />
				</p>
				<p>For several years I've been interested in the edge-computing “v8 isolates everywhere” approach to building web applications and the like. From a software perspective, I think the idea is enticing: lightweight JavaScript that is secure, simple and fast. Easy to deploy (with things like Deno Deploy), cheap (serverless) and portable (largely.)</p>

				<p>JavaScript and the ecosystem continues to evolve and mature at a quick pace. I'm a big fan of <a href="https://deno.land/">Deno</a>, mostly because it vastly simplifies writing JavaScript (and has first class support for TypeScript). Dependency management is much simpler, and it's aligned with ECMA script web APIs now, and into the future.</p>

				<p>I've also been experimenting with <a href="https://rmccue.io/">Ryan McCue</a> on a way to bring v8 isolates to WordPress enabling secure, sandboxed extensibility to WordPress; as an alternative to the “insecure-by-default” PHP WordPress plugins. This was done using the <a href="https://github.com/phpv8/v8js">php-v8js</a> extension, which provides PHP bindings to the V8 JavaScript engine. Unfortunately, that project is largely abandoned, which also lead to me re-implementing it in Rust (a story for another day.)</p>

				<p>Deno is a more widely supported V8 isolate platform, open source and <em>some</em> support for embedding into other applications. Rather than providing a V8-wrapper to PHP, I thought I'd have a go at implementing PHP bindings for Deno, to allow embedding the Deno runtime in PHP applications. It's also written in Rust, which I've been interested in trying out for a few years.</p>

				<h3>Why Rust</h3>

				<p>Throughout my career as a computer programmer, I've trended towards wanting more correctness in writing programs. This has led me from JavaScript to TypeScript, to adopting and contributing to tools like Psalm (a PHP static analyser) and trying to learn as much about “types in computer programming” as my non-mathematical brain can take in. As many will know, PHP, WordPress and JavaScript are about as far away as one can get from these concepts.</p>

				<p>Rust is a nice "reset" on programming for someone who's so used to dynamically typed, runtime driven programming. When you actually <em>want</em> a solid type system and want the compiler to just refuse to compile things not correct, having that feels like a godsend. When you don't appreciate those things, it is largely seen as an obstacle rather than an aid. I'm now fully in the camp of strong type systems and compiler errors being hugely valuable.</p>

				<p>It does mean confronting your lack of understanding 5 times a minute when my Rust programs don't compile, whereby writing the same thing in PHP would at-least run! It's been interesting to observe just how much one is reduced to a novice in light of a new programming language such as Rust. It also reminds me of how I was able to learn programming in the first-place though: tons and tons of trial and error, failing, retrying and persevering. If I've learned anything in 18 years of programming (and primarily debugging) it's “never give up”. For whatever reason I have the propensity to just keep going until I solve what I'm working on when programming, be it late into the night, or back at it the next day for another round of misunderstanding, failing and feeling utterly useless.</p>

				<p>So, why is building PHP-Deno "learning the hard way"? Mostly because it's mixing together several projects, in different languages.</p>

				<p>It requires an understanding of how the V8 engine works (which is written in C++) which is not well documented. For what documentation exists, it's written for people way smarter than I (ones writing JavaScript engines for one thing!) V8 is embedded into Deno Core, which is written in Rust. Deno Core has a nice wrapper for V8, however most Deno functionality that we know and love is part of Deno CLI, which is written as a CLI program — not what an embedded API can use. So, Deno internals knowledge is pretty important. Then, there's knowledge of Rust - PHP bridging, which essentially requires FFI calls to the PHP C internals; so PHP internals (written in C) knowledge is essential. Ultimately, writing a Rust program to map data types and function proxying between JavaScript and PHP involved a lot of moving parts.</p>

				<p>It has been mostly possible, though! One step at a time, grasping Rust concepts one-by-one, I have managed to produce something that compiles and for what I've been able to test so far, does work. My Rust knowledge is still <em>very</em> basic. I don't understand `dyn`, futures, raw pointers, lifetimes and many other things to such a degree that I can “just write it”; but I am enjoying it. I'm starting to see the light at the end of the tunnel to feel, dare I say… productive.</p>

				<hr />

				<p>You can follow along with PHP-Deno on my <a href="https://github.com/joehoyle/php-deno">Github repository</a> and you can check out examples of what kind of things you can do with PHP-Deno in the <a href="https://github.com/joehoyle/php-deno/tree/main/examples">examples directory</a>.</p>
			</div>
			<Footer />
		</div>
	);
}
