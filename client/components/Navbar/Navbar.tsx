import React from "react"
import Image from "next/image"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<nav className='flex justify-between align-middle px-60 backdrop-blur-mm bg-gray-900 bg-opacity-90 py-4 ='>
			<div className='bg-wrapper'>
				<Image
					className='invert'
					src='/next.svg'
					alt='Next.js Logo'
					width={180}
					height={37}
					priority
				/>
			</div>
			<ul className='nav-menu flex gap-2 text-lg'>
				<li>
					<a href=''>Articles</a>
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
					<a href=''></a>
				</li>
				<li>
					<a href=''>About</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
