import Head from 'next/head'
import { useDevice } from 'hooks'
// Components
import { Body, Container } from '../styles/perfil'
import { Avatar, Card, Paragraph } from 'components'
// Data
import { brief, softSkills } from 'data/perfil.json'

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
        large={true}
        style={{ marginBottom: '2rem' }}/>}
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
        <Card title={brief.title}>
          {brief.paragraphs.map((elem, index) => (
            <>
              <Paragraph key={index}>
                {elem}
              </Paragraph>
            </>
          ))}
        </Card>
        <Card title={softSkills.title}>
          {softSkills.paragraphs.map((elem, index) => (
            <>
              <Paragraph key={index} title={elem.title}>
                {elem.text}
              </Paragraph>
            </>
          ))}
        </Card>
      </Container>
    </Body>
    </>
  )
}