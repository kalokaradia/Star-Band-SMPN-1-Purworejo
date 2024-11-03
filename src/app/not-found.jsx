import Link from "next/link";

export default function NotFoundPage() {
	return (
		<section id="not-found">
			{/* MAIN CONTENT */}
			<main className="container">
				<div className="flex flex-col items-center justify-center py-52">
					<h1 className="mb-2.5 flex items-center text-6xl font-bold">
						404
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							className="ml-5 size-16"
							viewBox="0 0 16 16"
						>
							<path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
						</svg>
					</h1>

					<span className="bg-amber block rounded bg-slate-900 p-2 text-4xl font-bold text-amber-500">
						Page Not Found
					</span>

					<Link
						href={`/`}
						className="mx-auto mt-20 block w-fit rounded bg-amber-500 px-6 py-2 text-xl font-semibold text-slate-900"
					>
						Kembali ke Beranda
					</Link>
				</div>
			</main>
		</section>
	);
}
