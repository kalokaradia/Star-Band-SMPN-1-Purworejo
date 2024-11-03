import Gallery from "@/components/gallery/Gallery";

export default function Page() {
	return (
		<section id="gallery" className="pt-32">
			{/* MAIN CONTENT */}
			<div className="container">
				<header>
					<h1 className="mx-auto w-fit rounded text-center text-4xl font-bold uppercase max-sm:text-3xl">
						Galeri star band
						<span className="block rounded bg-slate-900 px-2 py-1 text-amber-500">
							smpn 1 purworejo
						</span>
					</h1>
					<p className="mx-auto mt-4 w-fit max-w-md text-center font-serif text-xl font-semibold italic text-slate-700">
						&quot;On Stage and Behind the Scenes&quot;
					</p>
				</header>
				<main className="mt-20">
					{/* GALLERY */}
					<Gallery />
				</main>
			</div>
		</section>
	);
}
