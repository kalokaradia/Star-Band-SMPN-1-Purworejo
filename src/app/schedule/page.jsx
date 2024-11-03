import AppearanceSchedule from "@/components/schedule/AppearanceSchedule";
import TrainingSchedule from "@/components/schedule/TrainingSchedule";

export default function Page() {
	return (
		<section id="schedule" className="pt-32">
			{/* MAIN CONTENT */}
			<div className="container">
				<header>
					<h1 className="mx-auto w-fit rounded text-center text-4xl font-bold uppercase max-sm:text-3xl">
						Rangkaian Kegiatan Star Band
						<span className="block rounded bg-slate-900 px-2 py-1 text-amber-500">
							smpn 1 purworejo
						</span>
					</h1>
					<p className="mx-auto mt-4 w-fit max-w-md text-center font-serif text-xl font-semibold italic text-slate-700">
						&quot;Lihat waktu dan tempat untuk menyaksikan
						penampilan Star Band, kebanggaan SMPN 1 Purworejo!&quot;
					</p>
				</header>
				<main className="mt-20">
					{/* TRAINING SCHEDULE */}
					<TrainingSchedule />

					{/* APPEARANCE SCHEDULE */}
					<AppearanceSchedule />
				</main>
			</div>
		</section>
	);
}
