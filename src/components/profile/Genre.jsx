const genres = [
	{
		name: "Pop",
		description:
			"Musik pop adalah genre musik populer dengan melodi catchy, lirik sederhana, dan struktur lagu yang mudah diingat. 🎤",
	},
	{
		name: "Rock",
		description:
			"Rock adalah musik yang menggunakan gitar listrik, bass, dan drum, dikenal dengan energi tinggi dan riff gitar kuat. 🎸",
	},
	{
		name: "Jazz",
		description:
			"Jazz adalah musik yang mengutamakan improvisasi, ritme kompleks, dan sering dimainkan dengan saksofon, trompet, piano, dan drum. 🎷",
	},
	{
		name: "Funk",
		description:
			"Funk adalah musik dengan ritme groove, bas dominan, dan pola drum syncopated. 🎶",
	},
];

export default function Genre() {
	return (
		<section id="genre">
			<main className="container mt-20 text-lg">
				<h2 className="mx-auto w-fit rounded bg-slate-900 px-2 py-1 text-center text-2xl font-bold uppercase text-amber-500 max-sm:text-xl">
					Genre yang Kami Mainkan
				</h2>
				<p className="mt-10 text-justify text-lg max-sm:text-base">
					Star Band SMPN 1 Purworejo menampilkan berbagai genre musik
					yang beragam, mulai dari pop, rock, hingga jazz. Dengan
					eksplorasi genre yang luas, para anggota dapat mengembangkan
					kemampuan mereka dalam memainkan berbagai jenis musik dan
					menampilkan variasi yang menarik bagi penonton.
					Fleksibilitas ini juga menunjukkan kreativitas dan
					keberanian Star Band dalam bereksperimen dengan gaya musik
					yang berbeda.
				</p>

				<ul className="mt-5 grid grid-cols-4 gap-4 max-[1040px]:grid-cols-2 max-sm:grid-cols-1">
					{genres.map((genre, index) => {
						return (
							<li
								key={index}
								className="rounded border-2 border-amber-600 bg-amber-200 p-2"
							>
								<span className="mx-auto my-2 block w-fit rounded bg-amber-400 px-3 py-1 text-xl font-semibold max-sm:text-lg">
									{genre.name}
								</span>
								<p className="text-justify text-lg max-sm:text-base">
									{genre.description}
								</p>
							</li>
						);
					})}
				</ul>
			</main>
		</section>
	);
}
