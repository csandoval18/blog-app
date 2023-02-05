import styled from "styled-components"

export const Nav = styled.nav`
	align-items: center;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: space-between;
	position: fixed;
	transition: top 0.6s ease-in-out,
		background-color 0.4s ease-in-out;
	top: -200px;
	left: 0;
	overflow: hidden;
	padding: 10px 1rem;
	width: calc(100% - 2rem);
	z-index: 100;
	&.display-nav {
		top: 0;
		transition: top 0.4s ease-in-out;
	}
	&.top {
		background-color: transparent;
		top: 0;
		transition: background-color 0.6 ease-in-out;
		.logo {
			z-index: 2;
		}
	}
	a {
		color: ${(p) => p.theme.colors.text};
		display: block;
		padding: 8px 15px;
		text-align: center;
		text-decoration: none;
		&::after {
			background-color: ${(p) => p.theme.colors.text};
			content: "";
			display: block;
			transition: width 0.25s ease-out;
			height: 2px;
			width: 0px;
		}
		&:hover {
			&::after {
				content: "";
				display: block;
				background-color: ${(p) => p.theme.colors.text};
				height: 2px;
				width: 100%;
			}
		}
	}
	.logo img {
		border-radius: 15px;
		height: 65px;
		width: 65px;
		transition: transform 0.5s ease;
		&:hover {
			transform: scale(1.1);
		}
	}
	ul {
		align-items: center;
		display: flex;
		list-style: none;
		gap: 1rem;
	}
	.menu-btn {
		align-items: center;
		display: flex;
		cursor: pointer;
		justify-content: center;
		height: 25px;
		position: relative;
		width: 35px;
	}
	.hamburger {
		background-color: ${(p) => p.theme.colors.text};
		border-radius: 5px;
		height: 4px;
		width: 35px;
		transition: transform 0.5s ease-in-out,
			background-color 0.5s ease-in-out;
	}
	.hamburger::before,
	.hamburger::after {
		background-color: ${(p) => p.theme.colors.text};
		border-radius: 6px;
		content: "";
		position: absolute;
		height: 4px;
		width: 35px;
		transition: transform 0.5s ease-in-out,
			background-color 0.5s ease-in-out;
	}
	.hamburger::before {
		transform: translateY(-11px);
	}
	.hamburger::after {
		transform: translateY(11px);
	}
	// Hamburger animation
	.menu-btn.open .hamburger {
		transform: translateX(50px);
		background-color: transparent;
		// Make hamburger button visible after sidebar is open
		z-index: 2;
	}
	.menu-btn.open .hamburger::before {
		transform: rotate(45deg) translate(-35px, 35px);
	}
	.menu-btn.open .hamburger::after {
		transform: rotate(-45deg) translate(-35px, -35px);
	}
	/* .nav-menu {
		display: none;
	} */
	@media (min-width: 1728px) {
		& {
			padding: 10px 5rem;
			width: calc(100% - 10rem);
		}
		.menu-btn {
			display: none;
		}
		.nav-menu {
			display: block;
		}
	}
	@media (min-width: 1921px) {
		& {
			padding: 10px 10rem;
			width: calc(100% - 20rem);
		}
	}
`
export const NavMenu = styled.div`
	&.show-sidebar {
		left: 0;
	}
	/* background-color: rgba(0, 0, 0, 1);
	position: fixed;
	height: 100vh;
	left: -100vw;
	top: 0;
	transition: left 0.5s ease-in-out;
	width: 80vw;
	z-index: 1; */
`
