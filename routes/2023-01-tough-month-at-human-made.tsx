/** @jsx h */
/** @jsxFrag Fragment */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import { asset } from "$fresh/runtime.ts";

export default function LearningRustTheHardWay() {
    return (
        <div className={tw`flex flex-col items-center bg-warmGray-100 min-h-screen p-5`}>
            <Head>
                <title>Tough Month at Human Made - Joe Hoyle</title>
                <meta name="description" content="If I've learned anything in 18 years of programming (and primarily debugging) it's “never give up”."></meta>
                <meta property="og:image" content={asset("/learning-rust-the-hard-way.png")} />
            </Head>
            <Header />

            <h2 className={tw`text-2xl mb-6`}>Tough Month at Human Made</h2>
            <div className={tw`max-w-3xl prose`}>
                <p>The passed few weeks have been a whilwind at <a href="https://humanmade.com/">Human Made</a>. We made the difficult decision to downsize the company to meet the customer demand we have been able to generate, rather than what we had planned for.</p>

                <p>Tom has provided <a href="https://tõm.com/redundancies-at-human-made/">a few more details</a>, too.</p>

                <p>That has meant letting many incredible people go from the company, so if you're reading this and looking to hire from the Enterprise WordPress space, do reach out as I'd love to be able to make recommendations.</p>

                <p>I am immensely grateful to all those who have been made redundant, and deeply sorry for an outcome that ultimately was not avoidable.</p>

                <p>Though this has been a difficult few weeks, Human Made has a strong road ahead in bringing WordPress to enterprise. We continue to do that via our WordPress hosting platform: <a href="https://www.altis-dxp.com">Altis Cloud</a>, solutions for marketers in <a href="https://www.altis-dxp.com/accelerate/">Accelerate</a> and our world-class <a href="https://humanmade.com/">Enterprise Agency</a>.</p>
            </div>
            <Footer />
        </div>
    );
}
