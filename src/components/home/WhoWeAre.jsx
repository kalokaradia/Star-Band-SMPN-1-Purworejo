const goals = [
	"Mengembangkan bakat dan kreativitas siswa dalam bidang musik.",
	"Menyediakan platform bagi siswa untuk mengekspresikan diri melalui musik.",
	"Meningkatkan rasa percaya diri dan kerja sama tim di antara para anggota.",
	"Mewakili SMPN 1 Purworejo dalam berbagai kompetisi dan acara seni.",
];

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

export default function WhoWeAre() {
	return (
		<section id="who-we-are" className="mt-20">
			{/* MAIN CONTENT */}
			<main className="container">
				<h2 className="mx-auto mb-10 w-fit rounded bg-slate-900 px-4 py-2 text-2xl font-bold uppercase text-amber-500">
					siapa kami?
				</h2>

				{/* HISTORY OF THIS BAND */}
				<div className="rounded bg-amber-200 p-3">
					<h3 className="mb-4 mt-4 text-center text-xl font-bold">
						Sejarah Star Band
					</h3>
					<div className="space-y-2 p-2 text-justify indent-4 text-lg">
						<p>
							Star Band SMPN 1 Purworejo resmi didirikan pada
							tahun 2005 atas inisiatif beberapa siswa dan guru
							seni yang melihat potensi besar di bidang musik di
							kalangan siswa. Awalnya, band ini terbentuk dari
							kumpulan kecil siswa yang rutin bermain musik
							sepulang sekolah, tetapi antusiasme yang tinggi
							membuat pihak sekolah memutuskan untuk meresmikan
							Star Band sebagai kegiatan ekstrakurikuler.
						</p>
					</div>
				</div>

				{/* PURPOSE THIS BAND */}
				<div className="mt-6 rounded bg-amber-200 p-3">
					<h3 className="mb-4 mt-4 text-center text-xl font-bold">
						Tujuan Band Kami
					</h3>
					<ul className="list-inside list-decimal space-y-2 p-2 text-justify indent-4 text-lg">
						{goals.map((goal, index) => (
							<li key={index}>{goal}</li>
						))}
					</ul>
				</div>

				{/* BAND MUSIC GENRE */}
				<div className="mt-6 rounded bg-amber-200 p-3">
					<h3 className="mb-4 mt-4 text-center text-xl font-bold">
						Genre Musik Kami
					</h3>
					<ul className="space-y-4 p-2 text-lg">
						{genres.map((genre, index) => (
							<li key={index}>
								<span className="font-semibold">
									{genre.name}
								</span>
								{genre.description && (
									<p className="text-justify">
										{genre.description}
									</p>
								)}
							</li>
						))}
					</ul>
				</div>
			</main>
		</section>
	);
}
