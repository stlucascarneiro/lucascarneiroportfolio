import { Card, Paragraph } from 'components'
import Head from 'next/head'
import { Anchor, Body, Container, Title } from '../styles/educacao'
// Assets
import data from 'data/educacao.json'
import Icons from 'atoms/icons'

export default function Carreira() {
  return (
    <>
      <Head>
        <title>Habilidades - Lucas Carneiro</title>
      </Head>
      <Body>
        <Container>
            <Title>Graduações</Title>
              {data.graduates.map((elem, index) => (
                <Card
                  key={index}
                  title={elem.title}
                  subtitle={elem.organization}
                  sideInfo={elem.date}
                  image={elem.image}
                  alt={elem.alt}>
                    {elem.certificates.length > 0 &&
                    elem.certificates.map((item: any, i) => (
                      <Paragraph key={i}>
                        <Anchor href={item.link} rel="noreferrer" target="_blank">
                          <Icons.certificate style={{ marginRight: '0.5rem' }}/>
                          {item.title} <small>({item.description})</small>
                        </Anchor>
                      </Paragraph>
                    ))}
                </Card>
              ))}
            <Title>Cursos</Title>
            {data.courses.map((elem, index) => (
                <Card
                  key={index}
                  title={elem.organization}
                  image={elem.image}
                  alt={elem.alt}>
                    {elem.certificates.map((item, i) => (
                      <Paragraph key={i}>
                        <Anchor href={item.link} rel="noreferrer" target="_blank">
                          <Icons.certificate style={{ marginRight: '0.5rem' }}/>
                          {item.title} <small>({item.description})</small>
                        </Anchor>
                      </Paragraph>
                    ))}
                </Card>
            ))}
        </Container>
    </Body>
    </>
  )
}