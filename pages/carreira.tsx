import { Card } from 'components'
import Head from 'next/head'
import { Body, Container, Title, Ul } from '../styles/carreira'
// Assets
import data from 'data/carreira.json'

export default function Carreira() {
  return (
    <>
      <Head>
        <title>Habilidades - Lucas Carneiro</title>
      </Head>
      <Body>
        <Container>
            <Title>Minha carreira</Title>
            {data.Jobs.map((elem, index) => (
                <Card
                 key={index}
                 title={elem.company}
                 subtitle={`${elem.level} - ${elem.role}`}
                 sideInfo={elem.date}
                 image={elem.image}>
                    <Ul>
                        {elem.description.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </Ul>
                </Card>
            ))}
            <Title>Outras experiências</Title>
            {data.Others.map((elem, index) => (
              <Card
                key={index}
                title={elem.company}
                subtitle={`${elem.level} - ${elem.role}`}
                image={elem.image}/>
            ))}
        </Container>
      </Body>
    </>
  )
}