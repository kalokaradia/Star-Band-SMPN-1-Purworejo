import Achievements from "@/components/profile/Achievements";
import Genre from "@/components/profile/Genre";
import History from "@/components/profile/History";
import SocialMedia from "@/components/profile/SocialMedia";
import Testimony from "@/components/profile/Testimony";

export default function Page() {
	return (
		<section id="profile" className="pt-32">
			{/* MAIN CONTENT */}
			<div className="container">
				<header>
					<h1 className="mx-auto w-fit rounded text-center text-4xl font-bold uppercase max-sm:text-3xl">
						profil star band
						<span className="block rounded bg-slate-900 px-2 py-1 text-amber-500">
							smpn 1 purworejo
						</span>
					</h1>
					<p className="mx-auto mt-4 w-fit max-w-md text-center font-serif text-xl font-semibold italic text-slate-700">
						&quot;Mengenal lebih dekat mengenai band kebanggaan SMPN
						1 Purworejo&quot;
					</p>
				</header>
				<main className="mt-20">
					{/* HISTORY */}
					<History />

					{/* GENRE */}
					<Genre />

					{/* ACHIEVEMENT */}
					<Achievements />

					{/* TESTIMONY & RIVIEWS */}
					<Testimony />

					{/* CONTACT & SOCIAL MEDIA */}
					<SocialMedia />
				</main>
			</div>
		</section>
	);
}
