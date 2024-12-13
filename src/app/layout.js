import { Saira } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const saira = Saira({
	weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	display: "swap",
})

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={saira.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
