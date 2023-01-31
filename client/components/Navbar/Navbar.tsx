import React from "react"
import Image from "next/image"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<nav className='navbar'>
			<div className='bg-wrapper'>
				<Image
					className='logo'
					src='/next.svg'
					alt='Next.js Logo'
					width={180}
					height={37}
					priority
				/>
			</div>
			<ul className='nav-menu'>
				<li>
					<a href=''>Articles</a>
				</li>
				<li>
					<a href=''>About</a>
				</li>
				<li>
					<a href=''>Contact</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
