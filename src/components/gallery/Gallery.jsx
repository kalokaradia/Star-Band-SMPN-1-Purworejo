import Image from "next/image";

const images = [
	"/bg/jumbotron.jpg",
	"/bg/bg1.jpeg",
	"/bg/bg2.jpeg",
	"/bg/bg3.jpeg",
];

export default function Gallery() {
	return (
		<section id="gallery-photos" className="grid grid-cols-4 gap-4">
			{images.map((imageSrc, index) => (
				<Image
					key={index}
					src={imageSrc}
					alt={`Image ${index + 1}`}
					width={500}
					height={300}
					className="aspect-square w-full rounded border-2 border-amber-400 object-cover object-center"
				/>
			))}
		</section>
	);
}
