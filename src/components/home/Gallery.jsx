import Image from "next/image";
import Link from "next/link";

const images = [
	"/bg/jumbotron.jpg",
	"/bg/bg1.jpeg",
	"/bg/bg2.jpeg",
	"/bg/bg3.jpeg",
	"/bg/main-bg.png",
	"/bg/main-bg-optional.png",
	"/member/member1.jpeg",
	"/member/member3.jpeg",
	"/member/member4.jpeg",
	"/member/member5.jpeg",
];

export default function Gallery() {
	return (
		<section id="gallery" className="mt-32">
			{/* MAIN CONTENT */}
			<main className="container">
				<h2 className="mx-auto mb-10 w-fit rounded bg-slate-900 px-4 py-2 text-2xl font-bold uppercase text-amber-500">
					galeri
				</h2>
				<div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
					{images.slice(0, 6).map((image, index) => (
						<div
							key={index}
							className="cursor-pointer shadow transition-all duration-300 ease-in-out hover:scale-[1.02]"
						>
							<Image
								src={image}
								alt={`Star Band ${index + 1}`}
								className="h-60 rounded border-2 border-amber-400 object-cover"
								width={500}
								height={400}
							/>
						</div>
					))}
				</div>
				<Link
					href={"/gallery"}
					className="mx-auto mt-10 block w-fit rounded bg-amber-500 px-6 py-2 text-xl font-semibold text-slate-900"
				>
					Lihat Semua Foto
				</Link>
			</main>
		</section>
	);
}
