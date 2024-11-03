const achievements = [
	{
		name: "Juara 1 Lomba Musik Antar Sekolah",
		description:
			"Pada ajang bergengsi ini, Star Band berhasil menduduki peringkat pertama dengan penampilan yang penuh semangat dan koreografi yang kompak. Prestasi ini menjadi bukti nyata dari usaha mereka untuk memberikan yang terbaik di setiap panggung.",
	},
	{
		name: "Juara 2 Festival Band Pelajar se-Jawa Tengah",
		description:
			"Dalam festival yang dihadiri oleh band-band pelajar se-Jawa Tengah ini, Star Band berhasil meraih posisi kedua. Dengan aransemen unik dan suara yang harmonis, mereka berhasil menarik perhatian juri dan penonton.",
	},
	{
		name: "Penghargaan Musisi Muda Terbaik",
		description:
			"Dalam acara ini, Star Band memperoleh penghargaan sebagai band dengan penampilan terbaik, menonjolkan bakat-bakat muda yang luar biasa. Prestasi ini memperlihatkan bahwa mereka tidak hanya unggul secara grup, tetapi juga memiliki potensi individu yang kuat.",
	},
	{
		name: "Juara 1 Lomba Band Pelajar Nasional",
		description:
			"Prestasi luar biasa ini diraih berkat komitmen seluruh anggota band dalam menciptakan harmonisasi yang solid. Dengan gaya khas dan musikalitas yang menonjol, Star Band berhasil membawa pulang gelar juara pertama dalam lomba yang diikuti oleh sekolah-sekolah dari seluruh Indonesia.",
	},
	{
		name: "Juara 2 Kompetisi Musik Kreatif",
		description:
			"Dalam kompetisi ini, Star Band tampil dengan aransemen yang kreatif dan berhasil menciptakan komposisi yang segar, yang mencerminkan kemampuan mereka untuk bereksperimen dalam bermusik. Peringkat kedua yang diraih adalah hasil dari kerja keras dan kolaborasi yang kuat di antara seluruh anggota.",
	},
	{
		name: "Penghargaan Band Favorit di Festival Musik Sekolah",
		description:
			"Tak hanya berhasil di panggung perlombaan, Star Band juga mendapat apresiasi dari penonton dan dinobatkan sebagai band favorit dalam sebuah festival musik sekolah. Dengan penampilan yang atraktif dan interaksi yang hangat dengan penonton, mereka berhasil mencuri hati para juri dan penonton.",
	},
	{
		name: "Peringkat 3 Lomba Cipta Lagu Pelajar",
		description:
			"Selain penampilan sebagai band, Star Band juga aktif dalam menciptakan karya orisinal. Pada lomba cipta lagu ini, mereka berhasil meraih peringkat ketiga dengan lagu bertemakan &quot;Semangat Remaja&quot;. Lagu ini mendapatkan apresiasi atas lirik yang kuat dan melodi yang menyentuh.",
	},
];

export default function Achievements() {
	return (
		<section id="achievement">
			<main className="container mt-20">
				<h2 className="mx-auto w-fit rounded bg-slate-900 px-2 py-1 text-center text-2xl font-bold uppercase text-amber-500 max-sm:text-xl">
					Prestasi yang Pernah Kami Raih
				</h2>
				<p className="mt-10 text-justify text-lg max-sm:text-base">
					Star Band dari SMPN 1 Purworejo telah menorehkan berbagai
					prestasi yang membanggakan. Berkat kerja keras dan latihan
					yang konsisten, mereka berhasil meraih sejumlah penghargaan
					yang menunjukkan kualitas dan dedikasi mereka dalam
					bermusik.
				</p>
				<ul className="mt-5 grid grid-cols-3 gap-4 max-[1040px]:grid-cols-2 max-sm:grid-cols-1">
					{achievements.map((achievement, index) => {
						return (
							<li
								key={index}
								className="rounded border-2 border-amber-600 bg-amber-200 p-2"
							>
								<span className="mx-auto my-2 block w-fit rounded bg-amber-400 px-3 py-1 text-center text-xl font-semibold max-sm:text-lg">
									{achievement.name}
								</span>
								<p className="text-justify text-lg max-sm:text-base">
									{achievement.description}
								</p>
							</li>
						);
					})}
				</ul>
			</main>
		</section>
	);
}
