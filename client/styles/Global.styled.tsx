import styled, {
	createGlobalStyle,
} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@300;500;700;900&display=swap');
  body {
    margin: 0;
    padding: 0;
  }
`
export const Theme = styled.div`
	background-color: ${(props) =>
		props.theme.colors.bg};
	height: 100%;
	width: 100%;
	* {
		color: ${(props) => props.theme.colors.text};
		font-family: "OrkneyTypeface";
		margin: 0;
	}
	p,
	a,
	span,
	button {
		font-size: 1em;
		line-height: 2rem;
	}
	h1 {
		color: #59ffcd;
		font-size: 6em;
		font-family: "BreakFont";
		/* font-family: "FivoSans"; */
		letter-spacing: 0.3rem;
		margin: 0;
	}
	h2 {
		font-size: 3.5em;
	}
	h3 {
		font-size: 2em;
	}
	h4 {
		font-size: 1.5em;
	}
	.container {
		padding-left: 0.8rem;
		padding-right: 0.8rem;
	}
	.btn {
		background-color: ${(props) =>
			props.theme.colors.bg};
		border-radius: 8px;
		padding: 1rem;
	}
	@media (min-width: 1256px) {
		.container {
			padding-inline: 5rem;
		}
	}
	@media (min-width: 1921px) {
		.container {
			padding-inline: 10rem;
		}
	}
`
export const NavButton = styled.button`
	background-color: transparent;
	border-radius: 14px;
	border: 2px solid rgb(255, 255, 255, 0.4);
	color: ${(props) => props.theme.colors.text};
	padding: 12px 20px;
	transition: background-color 0.5s ease,
		transform 0.5s ease, border 0.5s ease;
	&:hover {
		border: 2px solid rgb(255, 255, 255, 0.8);
		color: ${(props) => props.theme.colors.text};
		transform: translateY(-8px);
	}
`
export const Card = styled.div`
	align-items: center;
	background-color: rgba(0, 0, 0, 0.2);
	border-radius: 1.5rem;
	box-shadow: 1rem 1rem 4px -8px #a3c2ff2b;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	span,
	a {
		padding-bottom: 1rem;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		/* font-family: "BreakFont"; */
	}
`
