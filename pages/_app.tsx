import type { AppProps } from 'next/app'
import Head from 'next/head'
// Config
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'atoms/theme'
import { Navbar } from 'organisms'
import icons from 'atoms/icons'

// Types

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>My new cool app</title>
      </Head>
      <GlobalStyle />
      <Navbar menu={[
        { icon: icons.user, label: 'Perfil', path: '/perfil' },
        { icon: icons.code, label: 'Habilidades', path: '/habilidades' },
        { icon: icons.projects, label: 'Projetos', path: '/projetos' },
        { icon: icons.briefcase, label: 'Carreira', path: '/carreira' },
        { icon: icons.education, label: 'Educação', path: '/educacao' },
        { icon: icons.contact, label: 'Contato', path: '/' }
      ]}/>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}
