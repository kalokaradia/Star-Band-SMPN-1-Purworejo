const testimonyData = [
	{
		name: "person 1",
		message:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem necessitatibus totam in laboriosam quidem quisquam eligendi. Quasi, laboriosam?",
	},
	{
		name: "person 2",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae porro aliquam quod, exercitationem repudiandae ad praesentium a, deserunt laboriosam nam asperiores, blanditiis alias enim.",
	},
	{
		name: "person 3",
		message:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam incidunt accusantium dolorum illo exercitationem, placeat dicta voluptatem saepe est perspiciatis.",
	},
	{
		name: "person 4",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae porro aliquam quod, exercitationem repudiandae ad praesentium a, deserunt laboriosam nam asperiores, blanditiis alias enim.",
	},
	{
		name: "person 5",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae porro aliquam quod, exercitationem repudiandae ad praesentium a, deserunt laboriosam nam asperiores, blanditiis alias enim.",
	},
	{
		name: "person 6",
		message:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam incidunt accusantium dolorum illo exercitationem, placeat dicta voluptatem saepe est perspiciatis.",
	},
	{
		name: "person 7",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae porro aliquam quod, exercitationem repudiandae ad praesentium a, deserunt laboriosam nam asperiores, blanditiis alias enim.",
	},
	{
		name: "person 8",
		message:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae porro aliquam quod, exercitationem repudiandae ad praesentium a, deserunt laboriosam nam asperiores, blanditiis alias enim.",
	},
	{
		name: "person 9",
		message:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam incidunt accusantium dolorum illo exercitationem, placeat dicta voluptatem saepe est perspiciatis.",
	},
];

export default function Testimony() {
	return (
		<section id="testimony">
			<main className="container mt-20">
				<h2 className="mx-auto w-fit rounded bg-slate-900 px-2 py-1 text-center text-2xl font-bold uppercase text-amber-500 max-sm:text-xl">
					testimoni & ulasan
				</h2>
				<p className="mt-10 text-justify indent-4 text-lg max-sm:text-base">
					Star Band SMPN 1 Purworejo telah menerima banyak apresiasi
					positif dari berbagai pihak. Baik siswa, guru, maupun orang
					tua memberikan ulasan yang mengakui peran Star Band dalam
					mengembangkan bakat musik siswa. Testimoni ini mencerminkan
					betapa Star Band bukan hanya sebuah band sekolah, tetapi
					juga wadah untuk membangun kreativitas, disiplin, dan kerja
					sama di kalangan siswa.
				</p>
				<ul className="mt-5 grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
					{testimonyData.map((testimony, index) => {
						return (
							<li
								key={index}
								className="rounded border-2 border-amber-600 bg-amber-200 p-2"
							>
								<span className="my-2 block text-xl font-semibold underline decoration-amber-600 max-sm:text-lg">
									{testimony.name}
								</span>
								<p className="text-justify text-lg max-sm:text-base">
									{testimony.message}
								</p>
							</li>
						);
					})}
				</ul>
			</main>
		</section>
	);
}
