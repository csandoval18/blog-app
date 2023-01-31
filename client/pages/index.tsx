import React from "react"
import Home from "../components/Home"
import Navbar from "../components/Navbar"

interface indexProps {}

const index: React.FC<indexProps> = () => {
	return (
		<>
			<Navbar />
			<Home></Home>
		</>
	)
}

export default index
