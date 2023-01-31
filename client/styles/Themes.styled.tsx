const themeSettings = {
	darktheme: {
		colors: {
			primary: "rgb(139, 233, 140)",
			secondary: "",
			neutral: "",
			base: "",
			bg: "rgb(11, 11, 12)",
			text: "#fff",
			white: "#fff",
			black: "rgb(11, 11, 12)",
		},
		fonts: ["sans-serif", "Roboto"],
		fontSizes: {
			small: "1em",
			medium: "2em",
			large: "3em",
		},
	},
	lightTheme: {
		colors: {
			primary: "hotpink",
			secondary: "",
			neutral: "",
			base: "",
			bg: "#fff",
			text: "black",
			white: "#fff",
		},
		fonts: ["sans-serif", "Roboto"],
		fontSizes: {
			small: "1em",
			medium: "2em",
			large: "3em",
		},
	},
}
export const theme: typeof themeSettings = {
	...themeSettings,
}
