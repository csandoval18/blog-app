import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import {
	GlobalStyle,
	Theme,
} from "../styles/Global.styled"
import { theme } from "../styles/Themes.styled"

export default function App({
	Component,
	pageProps,
}: AppProps) {
	return (
		<ThemeProvider theme={theme.lightTheme}>
			<GlobalStyle />
			<Theme className='App'>
				<Component {...pageProps} />
			</Theme>
		</ThemeProvider>
	)
}
