import Image from "next/image";
import Link from "next/link";

const members = [
	{
		name: "Kiara July Cantika",
		role: "Vocalis",
		img: "/member/member1.jpeg",
	},
	{
		name: "Nazwa Hermi",
		role: "Vocalis & Drummer",
		img: "/member/member1.jpeg",
	},
	{ name: "Aryo Seno N.", role: "Rythm Guitar", img: "/member/member1.jpeg" },
	{ name: "Javas Rafa", role: "Lead Guitar", img: "/member/member1.jpeg" },
	{ name: "Johan Guwi Satrio", role: "Bassist", img: "/member/member1.jpeg" },
	{
		name: "Jeafna Aproditiandra Goesman",
		role: "Keyboardist",
		img: "/member/member1.jpeg",
	},
	{
		name: "Satrio Adji Sarinto",
		role: "Drummer",
		img: "/member/member1.jpeg",
	},
];

export default function Members() {
	return (
		<section id="memebers-home" className="mt-32">
			{/* MAIN CONTENT */}
			<main className="container">
				<h2 className="mx-auto mb-10 w-fit rounded bg-slate-900 px-4 py-2 text-2xl font-bold uppercase text-amber-500">
					anggota kami
				</h2>

				<div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
					{members.slice(0, 6).map((member, index) => {
						return (
							<div
								key={index}
								className="cursor-pointer rounded border-2 border-amber-600 bg-amber-200 shadow"
							>
								<Image
									src={member.img}
									alt={`${member.name} image`}
									width={500}
									height={400}
									className="w-full rounded-t object-cover"
								/>
								<div className="container my-5">
									<h3 className="border-l-4 border-amber-600 pl-4 text-xl font-bold">
										{member.name}
									</h3>
									<p className="mt-2 text-lg font-bold text-amber-700">
										{member.role}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				<Link
					href={"/members"}
					className="mx-auto mt-10 block w-fit rounded bg-amber-500 px-6 py-2 text-xl font-semibold text-slate-900"
				>
					Lihat Semua Anggota
				</Link>
			</main>
		</section>
	);
}
