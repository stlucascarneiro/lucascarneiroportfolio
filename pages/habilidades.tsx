import { Card, Paragraph, Rate } from 'components'
import Head from 'next/head'
import { CardContainer, Flag, Item, Label, LabelContainer, Title } from '../styles/habilidades'
import { Body, Container } from '../styles/perfil'
// Assets
import data from 'data/habilidades.json'

export default function Perfil() {
  return (
    <>
      <Head>
        <title>Habilidades - Lucas Carneiro</title>
      </Head>
      <Body>
        <Container>
          <Title>Habilidades</Title>
          <Card title='Tecnologias e técnicas de desenvolvimento'>
            <Paragraph>
              Aqui estão algumas tecnologias é tecnicas de desenvolvimento de software que eu estudei e apliquei até o momento. Para melhor entender a qualificação do domínio de cada item veja as legendas:
            </Paragraph>
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