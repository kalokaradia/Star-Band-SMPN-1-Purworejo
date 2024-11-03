import Members from "@/components/members/Members";

export default function Page() {
	return (
		<section id="members">
			{/* MAIN CONTENT */}
			<div className="container pt-32">
				<header>
					<h1 className="mx-auto w-fit rounded text-center text-4xl font-bold uppercase max-sm:text-3xl">
						anggota star band
						<span className="block rounded bg-slate-900 px-2 py-1 text-amber-500">
							smpn 1 purworejo
						</span>
					</h1>
					<p className="mx-auto mt-4 w-fit max-w-md text-center font-serif text-xl font-semibold italic text-slate-700">
						&quot;Para Bintang di Balik Star Band{" "}
						<span className="block">SMPN 1 Purworejo&quot;</span>
					</p>
				</header>
				<main className="mt-20">
					<Members />
				</main>
			</div>
		</section>
	);
}
