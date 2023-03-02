import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import HomeContent from "@/components/HomeContent"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return (
		<>
			<Navbar />
			<HomeContent />
		</>
	)
}
