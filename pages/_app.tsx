import type { AppProps } from 'next/app'
import Head from 'next/head'
// Config
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'atoms/theme'

// Types

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>My new cool app</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
