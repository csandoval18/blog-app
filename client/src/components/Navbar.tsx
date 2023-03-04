import React, { useState } from "react"
import Image from "next/image"
import styles from "@/styles/components/Navbar.module.scss"
import Link from "next/link"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	const [openMenu, setOpenMenu] = useState(false)
	return (
		<nav className={styles.navbar}>
			<Link href='/'>
				<Image
					className={styles.logo}
					src='/next.svg'
					alt='Next.js Logo'
					width={180}
					height={37}
					priority
				/>
			</Link>
			<ul
				className={
					openMenu
						? styles.navMenu + " " + styles.open
						: styles.navMenu
				}
			>
				<li>
					<a href='/services'>Politics</a>
				</li>
				<li>
					<a href='/economy'>Economy</a>
				</li>
				<li>
					<a href='/world'>Society</a>
				</li>
				<li>
					<a href='/world'>World</a>
				</li>
				<li>
					<a href='/sports'>Sports</a>
				</li>
				<li>
					<a href='/sports'>About</a>
				</li>
				<li>
					<a href='/contact'>Contact Us</a>
				</li>
			</ul>
			<div
				className={
					openMenu
						? styles.hamburgerWrapper + " " + styles.open
						: styles.hamburgerWrapper
				}
				onClick={() => {
					setOpenMenu(!openMenu)
				}}
			>
				<div className={styles.hamburger}></div>
			</div>
		</nav>
	)
}

export default Navbar
