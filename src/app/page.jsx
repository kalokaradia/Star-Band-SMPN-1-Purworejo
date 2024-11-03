import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Members from "@/components/home/Members";
import NearbyEvents from "@/components/home/NearbyEvents";
import Testimony from "@/components/home/Testimony";
import WhoWeAre from "@/components/home/WhoWeAre";

export default function Page() {
	return (
		<section id="home">
			<Hero />
			<WhoWeAre />
			<Members />
			<NearbyEvents />
			<Gallery />
			<Testimony />
		</section>
	);
}
