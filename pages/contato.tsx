import React from 'react'
import Head from 'next/head'
import { Card, Navigation, Paragraph } from 'components'
import { Body, Break, Container, NavigationContainer, Title } from '../styles/contato'
import icons from 'atoms/icons'

export default function Contato() {
  const navStyle: React.CSSProperties = { margin: 0 }
  return (
    <>
      <Head>
        <title>Contato - Lucas Carneiro</title>
      </Head>
      <Body>
        <Container>
          <Title>Minha carreira</Title>
          <Card title=''>
            <Paragraph>
                Gostaria de oferecer uma proposta de contratação ou precisa de um serviço freelance?
            </Paragraph>
            <Paragraph>
                Entre em contato comigo pelo e-mail ou pelo LinkedIn. Não se esqueça de conferir meu perfil no Github para ver mais projetos.
            </Paragraph>
            <NavigationContainer>
              <Navigation index={1} icon={icons.email} path='mailto:lucascarneiro.profissional@gmail.com' active={false} style={navStyle} blank>
                lucascarneiro.profissional<Break/>@gmail.com
              </Navigation>
              <Navigation index={2} icon={icons.linkedin} path='https://www.linkedin.com/in/stlucascarneiro/' active={false} style={navStyle} blank>
              stlucascarneiro
              </Navigation>
              <Navigation index={3} icon={icons.github} path='https://github.com/stlucascarneiro/' active={false} style={navStyle} blank>
                stlucascarneiro
              </Navigation>
              <Navigation index={4} icon={icons.map} path='' active={false} style={navStyle} blank>
                Rio de Janeiro - RJ
              </Navigation>
            </NavigationContainer>
          </Card>
        </Container>
      </Body>
    </>
  )
}