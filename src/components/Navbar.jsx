"use client";

import Link from "next/link";
import { useState } from "react";

const navMenu = [
	{
		name: "Beranda",
		linkTo: "",
	},
	{
		name: "Profil",
		linkTo: "profile",
	},
	{
		name: "Anggota",
		linkTo: "members",
	},
	{
		name: "Jadwal",
		linkTo: "schedule",
	},
	{
		name: "Galeri",
		linkTo: "gallery",
	},
	{
		name: "Berita & Blog",
		linkTo: "news-blog",
	},
	{
		name: "Kontak",
		linkTo: "contact",
	},
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header
			id="header"
			className="fixed z-[999999] w-full bg-amber-400 px-10 py-4"
		>
			{/* MAIN CONTENT */}
			<main className="container">
				<div className="flex items-center justify-between">
					<Link href={"/"} className="text-2xl font-bold uppercase">
						STAR BAND
					</Link>

					{/* NAVIGATION LINKS */}
					<nav className="hidden space-x-4 md:flex">
						{navMenu.map((menu, index) => {
							return (
								<Link key={index} href={"/" + menu.linkTo}>
									{menu.name}
								</Link>
							);
						})}
					</nav>

					{/* HAMBURGER MENU */}
					<div
						className="flex h-5 w-8 cursor-pointer flex-col justify-between md:hidden"
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					>
						<span className="block h-0.5 w-full rounded bg-black"></span>
						<span className="block h-0.5 w-full rounded bg-black"></span>
						<span className="block h-0.5 w-full rounded bg-black"></span>
					</div>
				</div>

				{/* ISOPEN MENU */}
				{isOpen && (
					<nav className="mt-4 flex flex-col space-y-4 md:hidden">
						<span className="block h-px w-full rounded bg-amber-600"></span>
						{navMenu.map((menu) => {
							return (
								<Link
									key={menu.id}
									href={"/" + menu.linkTo}
									className="ease border-amber-600 transition-all duration-300 hover:border-l-4 hover:pl-2"
								>
									{menu.name}
								</Link>
							);
						})}
					</nav>
				)}
			</main>
		</header>
	);
}
