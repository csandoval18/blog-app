import { useEffect, useState } from "react"

export const SCROLLDIRECTIONS = {
	UP: "up",
	DOWN: "down",
	TOP: "top",
}

export type SCROLLDIRECTIONS =
	typeof SCROLLDIRECTIONS[keyof typeof SCROLLDIRECTIONS]

const useGetScrollYDirection = (): string => {
	const [direction, setDirection] =
		useState("top")
	let prevScrollY = 0
	useEffect(() => {
		let dir: SCROLLDIRECTIONS
		window.onscroll = () => {
			const { scrollY } = window
			if (scrollY === 0) {
				dir = SCROLLDIRECTIONS.TOP
			} else if (prevScrollY < scrollY)
				dir = SCROLLDIRECTIONS.DOWN
			else if (prevScrollY >= scrollY) {
				dir = SCROLLDIRECTIONS.UP
			}
			prevScrollY = scrollY
			setDirection(dir)
		}
		return () => {
			window.onscroll = null
		}
	}, [])
	console.log(direction)
	return direction
}

export default useGetScrollYDirection
