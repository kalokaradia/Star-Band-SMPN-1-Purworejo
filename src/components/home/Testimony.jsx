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
		<section id="testimony" className="mt-32">
			{/* MAIN CONTENT */}
			<main className="container">
				<h2 className="mx-auto mb-10 w-fit rounded bg-slate-900 px-4 py-2 text-2xl font-bold uppercase text-amber-500">
					testimoni / kata orang
				</h2>

				<div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
					{testimonyData.slice(0, 6).map((testimony, index) => {
						return (
							<div
								className="cursor-pointer rounded border-2 border-amber-600 bg-amber-200 py-5 shadow"
								key={index}
							>
								<div className="container">
									<h3 className="mb-5 border-l-4 border-amber-600 pl-4 text-xl font-semibold text-slate-800 max-md:pl-3">
										{testimony.name}
									</h3>
									<p className="text-justify font-serif italic text-slate-800">
										&quot;{testimony.message}&quot;
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</main>
		</section>
	);
}
