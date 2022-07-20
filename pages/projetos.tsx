import Head from 'next/head'
import { Expansible } from 'organisms'
import { Body, Container, SectionTitle, Title } from '../styles/projetos'
import { Card, Paragraph } from 'components'
// Assets
import Icons from 'atoms/icons'
import { getData } from 'data'
// Types
import { IProjetos } from 'data/types'
interface IProps {
  data: IProjetos
}

export async function getServerSideProps() {
  const data = await getData('projetos', process.env.USE_LOCAL_DATA)
  return { props: { data } }
}

export default function Home({ data } : IProps) {
  return (
    <>
      <Head>
        <title>Projetos - Lucas Carneiro</title>
      </Head>
      <Body>
        <Container>
          <Title>Principais Projetos</Title>
          {data.projects.map((elem, index) => (
            <Expansible
              key={index}
              title={elem.title}
              subtitle={elem.description}
              image={elem.image.path}
              alt={elem.image.alt}
              primaryButton={{ icon: Icons.navigation, label: 'Deploy', href: elem.deploy }}
              secondaryButton={{ icon: Icons.github, label: 'Repositório', href: elem.repository }}>
              <SectionTitle>
                <Icons.code style={{ fontSize: '20px', marginRight: '0.5rem' }}/>
                Tecnologias
              </SectionTitle>
              {elem.technologies.map((subElem, i) => (
                <Paragraph key={i} title={subElem.title}>
                  {subElem.text}
                </Paragraph>
              ))}
              <SectionTitle>
                <Icons.gear style={{ fontSize: '20px', marginRight: '0.5rem' }}/>
                Arquitetura
              </SectionTitle>
              {elem.architecture.map((subElem, i) => (
                <Paragraph key={i} title={subElem.title}>
                  {subElem.text}
                </Paragraph>
              ))}
            </Expansible>
          ))}
          <Title>Projetos Menores</Title>
          {data.minorProjects.map((elem, index) => (
            <Card
              key={index}
              title={elem.title}
              subtitle={elem.description}
              image={elem.image.path}
              alt={elem.image.alt}
              onClick={() => window.open(elem.repository)}>
            </Card>
          ))}
        </Container>
      </Body>
    </>
  )
}