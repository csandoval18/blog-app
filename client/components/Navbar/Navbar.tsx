import React, { useEffect, useState } from "react"
import Image from "next/image"
import useGetScrollYDirection from "../../utils/useGetScrollYDirection"
import {
	Nav,
	Sidebar,
} from "../../styles/components/Navbar.styled"
import { NavButton } from "../../styles/Global.styled"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	const [openSideBar, setOpenSideBar] =
		useState<boolean>(false)
	const [navClass, setNavClass] =
		useState<string>("top")
	const scrollYDir = useGetScrollYDirection()

	useEffect(() => {
		if (
			scrollYDir === "up" &&
			openSideBar !== true
		)
			setNavClass("display-nav")
		else if (
			scrollYDir === "down" &&
			openSideBar !== true
		)
			setNavClass("")
		else if (
			scrollYDir === "top" &&
			openSideBar !== true
		) {
			setNavClass("top")
		} else {
			setNavClass("top")
		}
	})
	return (
		<Nav className={navClass}>
			<div className='logo'>
				<Image
					className='logo'
					src='/next.svg'
					alt='Next.js Logo'
					width={180}
					height={37}
					priority
				/>
			</div>
			<div className='nav-menu'>
				<ul>
					<li>
						<a href='#'>Acerca</a>
					</li>
					<li>
						<a href='#'>Servicios</a>
					</li>
					<li>
						<a href='#'>Galeria</a>
					</li>
					<li>
						<a href='#'>Opiniones</a>
					</li>
					<li>
						<NavButton>Contactanos</NavButton>
					</li>
				</ul>
			</div>
			<div
				className={
					openSideBar
						? "menu-btn open"
						: "menu-btn"
				}
				onClick={() => {
					setOpenSideBar(!openSideBar)
				}}
			>
				<div className='hamburger'></div>
			</div>
			<Sidebar
				className={
					openSideBar
						? "Sidebar show-sidebar"
						: "Sidebar"
				}
			/>
		</Nav>
	)
}

export default Navbar
