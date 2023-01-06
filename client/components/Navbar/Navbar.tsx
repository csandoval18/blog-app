import React from "react"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<nav className='flex justify-between align-middle px-60 backdrop-blur-sm bg-white/30 py-4 ='>
			<div className='logo-wrapper'>
				<img src='' alt='logo' />
			</div>
			<ul className='nav-menu'>
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
