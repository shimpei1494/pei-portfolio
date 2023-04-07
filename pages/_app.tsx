import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import { cyan, indigo } from '@mui/material/colors'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

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
      <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY || ""} language="ja"  >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </GoogleReCaptchaProvider>
    </>
  )
}
