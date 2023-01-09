import React from "react"
import Navbar from "../components/Navbar/Navbar"
import styles from "../styles/Home.module.css"
import Image from "next/image"
import logo from "../public/next.svg"

interface indexProps {}

const index: React.FC<indexProps> = () => {
	return (
		<>
			<Navbar />
		</>
	)
}

export default index
