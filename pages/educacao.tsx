import { Card, Paragraph } from 'components'
import Head from 'next/head'
import { Anchor, Body, Container, Title } from '../styles/educacao'
// API
import { getData } from 'data'
// Assets
import Icons from 'atoms/icons'
// Types
import { IEducacao } from 'data/types'
interface IProps {
  data: IEducacao
}

export async function getServerSideProps() {
  const data = await getData('educacao', process.env.USE_LOCAL_DATA)
  return { props: { data } }
}
export default function Carreira({ data }: IProps) {
  return (
    <>
      <Head>
        <title>Educação - Lucas Carneiro</title>
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
                  image={elem.image.path}
                  alt={elem.image.alt}>
                    {elem.certificates &&
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
                  image={elem.image.path}
                  alt={elem.image.alt}>
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