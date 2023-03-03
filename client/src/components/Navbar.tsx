import React from "react"
import Image from "next/image"
import styles from "@/styles/components/Navbar.module.scss"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<nav className={styles.navbar}>
			<Image
				className={styles.logo}
				src='/next.svg'
				alt='Next.js Logo'
				width={180}
				height={37}
				priority
			/>
			<ul className={styles.navMenu}>
				<li>
					<a href=''></a>
				</li>
				<li>
					<a href=''></a>
				</li>
				<li>
					<a href=''></a>
				</li>
				<li>
					<a href=''></a>
				</li>
				<li>
					<a href=''>Contact</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
