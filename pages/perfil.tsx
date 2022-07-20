import Head from 'next/head'
import { useDevice } from 'hooks'
// Components
import { Body, ChartContainer, Container, Title } from '../styles/perfil'
import { Avatar, Card, Paragraph } from 'components'
import { PieChart } from 'react-minimal-pie-chart'
// Data
import { getData } from 'data'
// Types
import { IPerfil } from 'data/types'
interface IProps{
  data: IPerfil
}

export async function getStaticProps() {
  const data = await getData('perfil', process.env.USE_LOCAL_DATA)
  return { props: { data } }
}

function Header() {
  const device = useDevice()
  return (
    <>
      {device > 3 &&
      <Avatar
        name='Lucas Carneiro'
        subtitle='Desenvolvedor Front-end'
        image='images/photos/avatar.png'
        alt='Fotografia de Lucas Carneiro'
        large={true}
        style={{ marginBottom: '2rem' }}/>}
    </>
  )
}

export default function Perfil({ data }: IProps) {
  return (
    <>
    <Head>
      <title>Perfil - Lucas Carneiro</title>
    </Head>
    <Body>
      <Container>
        <Header/>
        <Card title={data.brief.title} key={1}>
          {data.brief.paragraphs.map((elem, index) => (
              <Paragraph key={index}>
                {elem}
              </Paragraph>
          ))}
        </Card>
        <Card title={data.softSkills.title} key={2}>
          {data.softSkills.paragraphs.map((elem, index) => (
              <Paragraph key={index} title={elem.title} paragraphs={elem.text}>
              </Paragraph>
          ))}
        </Card>
        <Title>Perfil</Title>
        <ChartContainer>
          <PieChart
            style={{ maxWidth: '400px', maxHeight: '400px', overflow: 'visible' }}
            lineWidth={60}
            animate={true}
            startAngle={135}
            labelStyle={{ fill: '#fff', fontSize: '4px' }}
            label={({ dataIndex }) => (
              data.profile[dataIndex].title
            )}
            labelPosition={115}
            radius={30}
            data={data.profile.map(elem => (
              { title: elem.title, value: elem.rate, color: elem.color }
            ))}
          />
        </ChartContainer>
        <Card title=''>
          {data.profile.map((elem, i) => (
            <Paragraph key={i} title={`${elem.title} - ${elem.rate}%`}>
              {elem.text}
            </Paragraph>
          ))}
        </Card>
      </Container>
    </Body>
    </>
  )
}