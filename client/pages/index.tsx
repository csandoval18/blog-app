import React from "react"
import Navbar from "../components/Navbar"

interface indexProps {}

const index: React.FC<indexProps> = () => {
	return (
		<>
			<Navbar />
			<div className='home'></div>
		</>
	)
}

export default index
