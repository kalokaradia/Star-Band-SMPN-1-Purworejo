import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Montserrat = localFont({
	src: "./fonts/default.ttf",
	weight: "100 900",
});

export const metadata = {
	title: "Star Band SMPN 1 Purworejo",
	description: "Website resmi Star Band SMPN 1 Purworejo",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className="overflow-x-hidden scroll-smooth bg-amber-100 text-slate-900"
		>
			<body
				className={`${Montserrat.className} overflow-x-hidden bg-repeat antialiased`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
