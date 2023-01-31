import React from "react"
import {
	Hero,
	HomeSection,
} from "../styles/components/Home.styled"

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<HomeSection className='Home'>
			<Hero>
				<h1>CAS Blog</h1>
			</Hero>
		</HomeSection>
	)
}

export default Home
