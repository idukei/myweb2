import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-lg font-serif brightness-50 duration-500 text-white hover:text-amber-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 font-serif text-4xl duration-1000 text-amber-200 cursor-default text-edge-outline animate-title font-display before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				iduque
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm font-serif text-zinc-500">
					------////// .
				</h2>
				<h3 className="text-sm font-serif text-zinc-500">
					 This is my portfolio, built with Vercel, Upstash, Next, Tailwindcss, and React.
				</h3>

			</div>
		</div>
	);
}
