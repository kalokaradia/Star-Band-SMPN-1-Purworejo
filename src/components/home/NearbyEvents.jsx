import Image from "next/image";
import Link from "next/link";

const schedulesEvents = [
	{
		img: "/bg/jumbotron.jpg",
		id: 1,
		date: "2024-11-05",
		time: "18:00",
		event: "Konser Musik SMPN 1 Purworejo",
		location: "Gedung Olahraga",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed incidunt quos quae dolorem repellat cumque?",
	},
	{
		img: "/bg/jumbotron.jpg",
		id: 2,
		date: "2024-11-12",
		time: "15:00",
		event: "Festival Seni",
		location: "Lapangan Sekolah",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed incidunt quos quae dolorem repellat cumque?",
	},
	{
		img: "/bg/jumbotron.jpg",
		id: 3,
		date: "2024-11-19",
		time: "20:00",
		event: "Malam Pentas Seni",
		location: "Auditorium",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed incidunt quos quae dolorem repellat cumque?",
	},
	{
		img: "/bg/jumbotron.jpg",
		id: 4,
		date: "2024-11-26",
		time: "17:00",
		event: "Hari Raya Sekolah",
		location: "Halaman Sekolah",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed incidunt quos quae dolorem repellat cumque?",
	},
];

export default function NearbyEvents() {
	return (
		<section id="nearby-events" className="mt-32">
			{/* MAIN CONTENT */}
			<main className="container">
				<h2 className="mx-auto mb-10 w-fit rounded bg-slate-900 px-4 py-2 text-2xl font-bold uppercase text-amber-500">
					acara terdekat
				</h2>

				<div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
					{schedulesEvents.slice(0, 4).map((event) => {
						return (
							<div
								key={event.id}
								className="cursor-pointer rounded border-2 border-amber-400 bg-amber-200 shadow"
							>
								<Image
									src={event.img}
									alt={event.title}
									width={500}
									height={400}
									className="h-[300px] w-full rounded-t-lg object-cover"
								/>
								<div className="p-5">
									<h3 className="border-l-4 border-amber-600 pl-4 text-xl font-semibold text-slate-800">
										{event.event}
									</h3>
									<h4 className="mt-2 text-lg text-slate-700">
										Tanggal :{" "}
										<span className="text-amber-700">
											{event.date}
										</span>
									</h4>
									<h4 className="text-lg text-slate-700">
										Lokasi :{" "}
										<span className="text-amber-700">
											{event.location}
										</span>
									</h4>
									<h4 className="text-lg text-slate-700">
										Waktu :{" "}
										<span className="text-amber-700">
											{event.time}
										</span>
									</h4>
									<p className="mt-3 leading-relaxed text-slate-600">
										{event.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				<Link
					href={"/schedule"}
					className="mx-auto mt-10 block w-fit rounded bg-amber-500 px-6 py-2 text-xl font-semibold text-slate-900"
				>
					Lihat Semua Acara
				</Link>
			</main>
		</section>
	);
}
