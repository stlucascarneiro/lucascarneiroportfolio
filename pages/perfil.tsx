import { Avatar } from 'components'
import { useDevice } from 'hooks'
import Head from 'next/head'
import { Body, Container } from '../styles/perfil'

// Assets

function Header() {
  const device = useDevice()
  console.log('header')
  return (
    <>
      {device > 3 &&
      <Avatar
        name='Lucas Carneiro'
        subtitle='Desenvolvedor Front-end'
        image='images/photo/avatar.png'
        alt='Fotografia de Lucas Carneiro'
        large={true}/>}
    </>
  )
}

export default function Perfil() {
  return (
    <>
    <Head>
      <title>Perfil - Lucas Carneiro</title>
    </Head>
    <Body>
      <Container>
        <Header/>
      </Container>
    </Body>
    </>
  )
}