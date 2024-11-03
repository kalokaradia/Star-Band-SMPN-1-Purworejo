import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section id="hero" className="relative h-screen">
			{/* STAR BAND BACKGROUND */}
			<div className="absolute -z-10 h-full w-full">
				<Image
					src={"/bg/jumbotron.jpg"}
					alt={"hero background"}
					width={500}
					height={300}
					className="h-full w-full object-cover"
				/>
			</div>

			{/* GRAY BACKGROUND */}
			<div className="absolute -z-10 h-full w-full bg-slate-500 opacity-50"></div>

			{/* MAIN CONTENT */}
			<main className="container z-20 flex h-full flex-col items-center justify-center text-white">
				<h1 className="mb-8 text-center text-5xl font-bold max-sm:text-4xl">
					<span className="upeprcase mx-auto mb-2 block w-fit rounded bg-slate-900 p-1 text-amber-500">
						Star Band
					</span>{" "}
					SMPN 1 Purworejo
				</h1>
				<p className="mx-auto mb-5 w-2/3 py-2 text-center text-xl font-semibold text-white max-sm:text-lg">
					Band berbakat dari SMPN 1 Purworejo yang memadukan semangat
					dan musik dalam harmoni sempurna.
				</p>
				<div className="grid grid-cols-2 gap-2 text-center text-lg max-sm:text-base">
					<Link
						href={"/gallery"}
						className="rounded bg-amber-500 p-2 font-semibold text-slate-900"
					>
						Penampilan Kami
					</Link>
					<Link
						href={"/jadwal"}
						className="rounded bg-white p-2 font-semibold text-slate-900"
					>
						Jadwal Acara
					</Link>
				</div>
			</main>
		</section>
	);
}
