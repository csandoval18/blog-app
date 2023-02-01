import styled from "styled-components"

export const HomeSection = styled.section``

export const Hero = styled.section`
	align-items: center;
	display: flex;
	justify-content: center;
	min-height: 100vh;
	&::after {
		border: 2px solid ${(p) => p.theme.colors.text};
		content: "";
		display: block;
	}
`
