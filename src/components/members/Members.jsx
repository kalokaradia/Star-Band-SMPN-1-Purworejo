import Image from "next/image";
import Link from "next/link";

function slugify(name) {
	return name.toLowerCase().replace(/\s+/g, "-");
}

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
		<section
			className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1"
			id="member-list"
		>
			{members.map((member, index) => {
				return (
					<div
						key={index}
						className="rounded border-2 border-amber-600 bg-amber-200 shadow"
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

							<Link
								href={`/members/${slugify(member.name)}`}
								className="max-sm;text-base mt-10 block w-fit rounded bg-amber-500 px-3 py-1 text-lg font-semibold text-slate-900"
							>
								Lihat Profil
							</Link>
						</div>
					</div>
				);
			})}
		</section>
	);
}
