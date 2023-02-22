import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import { cyan, indigo } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[800],
    },
    secondary: {
      main: cyan[700],
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
