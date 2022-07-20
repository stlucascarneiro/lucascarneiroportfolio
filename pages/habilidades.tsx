import { Card, Paragraph, Rate } from 'components'
import Head from 'next/head'
import { Body, Container, CardContainer, Flag, Item, Label, LabelContainer, Title } from '../styles/habilidades'
// API
import { getData } from 'data'
// Types
import { IHabilidades } from 'data/types'
interface IProps {
  data: IHabilidades
}

export async function getServerSideProps() {
  const data = await getData('habilidades', process.env.USE_LOCAL_DATA)
  return { props: { data } }
}

export default function Habilidades({ data }: IProps) {
  return (
    <>
      <Head>
        <title>Habilidades - Lucas Carneiro</title>
      </Head>
      <Body>
        <Container>
          <Title>Habilidades</Title>
          <Card title={data.technologies.title}>
            {data.technologies.paragraphs.map((elem, index) => (
              <Paragraph key={index}>
                {elem}
              </Paragraph>
            ))}
            <LabelContainer>
              <Item>
                <Flag color='error'/>
                <Label>Estudado</Label>
              </Item>
              <Item>
                <Flag color='warning'/>
                <Label>Aplicado em projeto</Label>
              </Item>
              <Item>
                <Flag color='success'/>
                <Label>Experiência profissional</Label>
              </Item>
            </LabelContainer>
          </Card>
          {data.stacks.map((elem, index) => (
            <Card
              key={index}
              title={elem.title}
              subtitle={elem.subtitle}
              image={elem.image.path}
              alt={elem.image.alt}>
                <CardContainer>
                  {elem.items.map((subElem, subIndex) => (
                    <Rate key={subIndex} level={subElem.level}>
                      {subElem.title}
                    </Rate>
                  ))}
                </CardContainer>
            </Card>
          ))}
        </Container>
      </Body>
    </>
  )
}