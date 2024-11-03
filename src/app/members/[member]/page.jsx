import Image from "next/image";
import Link from "next/link";

async function getData(member) {
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
		{
			name: "Aryo Seno N.",
			role: "Rythm Guitar",
			img: "/member/member1.jpeg",
		},
		{
			name: "Javas Rafa",
			role: "Lead Guitar",
			img: "/member/member1.jpeg",
		},
		{
			name: "Johan Guwi Satrio",
			role: "Bassist",
			img: "/member/member1.jpeg",
		},
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

	return members.find((m) => slugify(m.name) === member);
}

function slugify(name) {
	return name.toLowerCase().replace(/\s+/g, "-");
}

export default async function MemberPage({ params }) {
	const { member } = params;
	const data = await getData(member);

	if (!data) {
		return <p>Member tidak ditemukan</p>;
	}

	return (
		<section className="container mt-32" id={"member-" + data.name}>
			<h1 className="mx-auto w-fit text-2xl font-bold max-sm:text-xl">
				Profil Member -{" "}
				<span className="rounded bg-slate-900 px-2 py-1 text-amber-500">
					{data.name}
				</span>
			</h1>

			<Link
				href={"/"}
				className="mx-auto mt-10 block w-fit rounded bg-amber-500 px-6 py-2 text-xl font-semibold text-slate-900"
			>
				Kembali ke Halaman Anggota
			</Link>

			<div className="mx-auto mt-20 flex w-fit items-center space-x-5 rounded border-2 border-amber-600 bg-amber-200 px-8 py-5">
				<div className="">
					<Image
						width={500}
						height={400}
						src={data.img}
						alt={`${data.name} image`}
						className="mx-auto h-72 w-72 rounded-[100%] border-2 border-amber-600 object-cover"
					/>
				</div>

				<div className="flex flex-col">
					<p className="text-lg max-sm:text-base">
						Nama: <span className="font-semibold">{data.name}</span>
					</p>
					<p className="text-lg max-sm:text-base">
						Peran:{" "}
						<span className="font-semibold">{data.role}</span>
					</p>
				</div>
			</div>
		</section>
	);
}
