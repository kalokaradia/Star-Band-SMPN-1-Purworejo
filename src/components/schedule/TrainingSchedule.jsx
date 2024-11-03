const scheduleData = [
	{ no: 1, hari: "Senin", waktu: "13:30 - 15:30", tempat: "Ruang Band" },
	{ no: 2, hari: "Selasa", waktu: "13.30 - 15:30", tempat: "Ruang Band" },
	{ no: 3, hari: "Kamis", waktu: "13:30 - 15:30", tempat: "Ruang Band" },
	{ no: 4, hari: "Sabtu", waktu: "13:00 - 15:00", tempat: "Ruang Band" },
];

export default function TrainingSchedule() {
	return (
		<section id="training-schedule">
			<h2 className="mx-auto w-fit rounded bg-slate-900 px-2 py-1 text-center text-2xl font-bold uppercase text-amber-500 max-sm:text-xl">
				Jadwal Latihan kami
			</h2>
			<table className="mt-10 w-full border-collapse border border-amber-600">
				<thead>
					<tr className="bg-amber-200">
						<th className="border border-amber-300 px-4 py-2">
							No
						</th>
						<th className="border border-amber-300 px-4 py-2">
							Hari
						</th>
						<th className="border border-amber-300 px-4 py-2">
							Waktu
						</th>
						<th className="border border-amber-300 px-4 py-2">
							Tempat
						</th>
					</tr>
				</thead>
				<tbody>
					{scheduleData.map((item, index) => (
						<tr key={index} className="text-center">
							<td className="border border-amber-300 px-4 py-2">
								{item.no}
							</td>
							<td className="border border-amber-300 px-4 py-2">
								{item.hari}
							</td>
							<td className="border border-amber-300 px-4 py-2">
								{item.waktu}
							</td>
							<td className="border border-amber-300 px-4 py-2">
								{item.tempat}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<p className="mt-2 text-sm font-medium italic text-slate-700">
				* Jadwal dapat berubah sewaktu-waktu tanpa pemberitahuan
				sebelumnya. *
			</p>
		</section>
	);
}
