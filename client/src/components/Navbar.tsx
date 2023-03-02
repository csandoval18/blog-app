import React from "react"
import Image from "next/image"
import styles from "@/styles/components/Navbar.module.scss"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<nav className={styles.navbar}>
			<div className='logo'>
				{" "}
				<Image
					className=''
					src='/next.svg'
					alt='Next.js Logo'
					width={180}
					height={37}
					priority
				/>
			</div>
		</nav>
	)
}

export default Navbar
