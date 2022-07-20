import { Card } from 'components'
import Head from 'next/head'
import { Body, Container, Title, Ul } from '../styles/carreira'
// API
// import data from 'data/carreira.json'
import { ICarreira } from 'data/types'
import { getData } from 'data'
// Types
interface IProps{
  data: ICarreira
}

export async function getStaticProps() {
  const data = await getData('carreira', process.env.USE_LOCAL_DATA)
  return { props: { data } }
}

export default function Carreira({ data }: IProps) {
  return (
    <>
      <Head>
        <title>Carreira - Lucas Carneiro</title>
      </Head>
      <Body>
        <Container>
            <Title>Minha carreira</Title>
            {data.jobs.map((elem, index) => (
                <Card
                 key={index}
                 title={elem.company}
                 subtitle={`${elem.level} - ${elem.role}`}
                 sideInfo={elem.date}
                 image={elem.image.path}
                 alt={elem.image.path}>
                    <Ul>
                        {elem.description.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </Ul>
                </Card>
            ))}
            <Title>Outras experiências</Title>
            {data.others.map((elem, index) => (
              <Card
                key={index}
                title={elem.company}
                subtitle={`${elem.level} - ${elem.role}`}
                image={elem.image.path}
                alt={elem.image.alt}/>
            ))}
        </Container>
      </Body>
    </>
  )
}