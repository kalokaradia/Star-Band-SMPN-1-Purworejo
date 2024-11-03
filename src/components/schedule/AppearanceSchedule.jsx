"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

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

export default function AppearanceSchedule() {
	const [timeLeft, setTimeLeft] = useState({});

	useEffect(() => {
		const calculateTimeLeft = () => {
			const now = new Date();

			const updatedTimeLeft = {};
			schedulesEvents.forEach((schedule) => {
				const eventDateTime = new Date(
					`${schedule.date}T${schedule.time}:00`,
				);
				const difference = eventDateTime - now;

				if (difference > 0) {
					const days = Math.floor(difference / (1000 * 60 * 60 * 24));
					const hours = Math.floor(
						(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
					);
					const minutes = Math.floor(
						(difference % (1000 * 60 * 60)) / (1000 * 60),
					);
					const seconds = Math.floor(
						(difference % (1000 * 60)) / 1000,
					);

					updatedTimeLeft[schedule.id] = {
						days,
						hours,
						minutes,
						seconds,
					};
				} else {
					updatedTimeLeft[schedule.id] = null; // Event telah lewat
				}
			});
			setTimeLeft(updatedTimeLeft);
		};

		calculateTimeLeft();
		const interval = setInterval(calculateTimeLeft, 1000); // Perbarui setiap detik

		return () => clearInterval(interval);
	}, []);

	return (
		<section id="appearance-schedule" className="mt-20">
			<h2 className="mx-auto w-fit rounded bg-slate-900 px-2 py-1 text-center text-2xl font-bold uppercase text-amber-500 max-sm:text-xl">
				Jadwal Penampilan kami
			</h2>
			<ul className="mt-5 grid grid-cols-3 gap-4 max-[1200px]:grid-cols-1">
				{schedulesEvents.map((schedule) => (
					<li
						key={schedule.id}
						className="rounded border-2 border-amber-600 bg-amber-200"
					>
						<Image
							width={500}
							height={400}
							src={schedule.img}
							alt={schedule.event}
							className="w-full object-cover"
						/>
						<div className="container py-4">
							<h3 className="mb-5 border-l-4 border-amber-600 pl-4 text-xl font-bold">
								{schedule.event}
							</h3>
							<p>
								<strong>Tanggal:</strong> {schedule.date}
							</p>
							<p>
								<strong>Waktu:</strong> {schedule.time}
							</p>
							<p>
								<strong>Lokasi:</strong> {schedule.location}
							</p>
							<p>{schedule.description}</p>
							{timeLeft[schedule.id] ? (
								<p className="mt-5 font-semibold text-green-700">
									{timeLeft[schedule.id].days > 0
										? `${timeLeft[schedule.id].days} hari, `
										: ""}
									{timeLeft[schedule.id].hours > 0 ||
									timeLeft[schedule.id].days > 0
										? `${timeLeft[schedule.id].hours} jam, `
										: ""}
									{timeLeft[schedule.id].minutes > 0 ||
									timeLeft[schedule.id].hours > 0 ||
									timeLeft[schedule.id].days > 0
										? `${timeLeft[schedule.id].minutes} menit, `
										: ""}
									{timeLeft[schedule.id].seconds} detik lagi
								</p>
							) : (
								<p className="text-red-500">
									Event telah lewat
								</p>
							)}
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
