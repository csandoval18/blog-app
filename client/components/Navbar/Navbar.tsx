import React from "react"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<nav className='flex justify-between align-middle px-60 backdrop-blur-sm bg-white/30 py-4 ='>
			<ul className='nav-menu'>
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
					<a href=''></a>
				</li>
				<li>
					<a href=''></a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
