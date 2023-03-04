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
			<div
				onClick={() => {
					setOpenMenu(!openMenu)
				}}
				className={
					openMenu
						? styles.navMenuWrapper + " " + styles.open
						: styles.navMenuWrapper
				}
			>
				<ul className={styles.navMenu}>
					<li>
						<a href='/politics'>Politics</a>
					</li>
					<li>
						<a href='/economy'>Economy</a>
					</li>
					<li>
						<a href='/society'>Society</a>
					</li>
					<li>
						<a href='/world'>World</a>
					</li>
					<li>
						<a href='/sports'>Sports</a>
					</li>
					<li>
						<a href='/about'>About</a>
					</li>
					<li>
						<a href='/contact'>Contact Us</a>
					</li>
				</ul>
			</div>
			<div
				className={
					openMenu
						? styles.hamburgerBtn + " " + styles.open
						: styles.hamburgerBtn
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
