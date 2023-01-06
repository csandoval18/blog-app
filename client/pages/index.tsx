import React from "react"
import Navbar from "../components/Navbar/Navbar"
import styles from "../styles/Home.module.css"
import Image from "next/image"

interface indexProps {}

const index: React.FC<indexProps> = () => {
	return (
		<>
			<Navbar>
				<Image
					className={styles.logo}
					src='/next.svg'
					alt='Next.js Logo'
					width={180}
					height={37}
					priority
				/>
			</Navbar>
		</>
	)
}

export default index
