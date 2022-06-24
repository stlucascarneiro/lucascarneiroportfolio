// import Head from 'next/head'
// import Image from 'next/image'
import { Button, Navigation, Paragraph, Rate, Card } from 'components'
import { Dropdown, Expansible } from 'organisms'
// Assets
import icons from 'atoms/icons'

const Spacing = () => (
  <div style={{ width: '10px', height: '24px' }}/>
)

export default function Home() {
  return (
    <div>
      <Button>Primário</Button>
      <Spacing/>
      <Navigation icon={icons.briefcase} path="/carreira">Carreira</Navigation>
      <Spacing/>
      <Dropdown menu={[
        { label: 'Um Texto', onClick: () => console.log('teste') },
        { label: 'Item', onClick: () => console.log('teste') }
      ]}>
        Menu Dropdown
      </Dropdown>
      <Spacing/>
      <Expansible
        title="Análise e desenvolvimento de sistemas"
        subtitle='Faculdade Descomplica'
        primaryButton = {{ icon: icons.navigation, label: 'Deploy' }}
        secondaryButton={{ icon: icons.github, label: 'Repositório' }}
        expansible={true}
        sideInfo="2022 - conclusão em 2024"
        image='images/css.png'>
        <Paragraph>
          Após uma grande mudança de carreira, criei uma paixão por estudar e trabalhar com desenvolvimento de software que mudou minha vida.
        </Paragraph><br/>
        <Paragraph title='Um título legal'>
        Eu sou intenso em tudo o que me proponho a fazer e o desejo de sempre me superar me leva a ter prazer em aprender rapidamente. Por isso, é imprescindível, para mim, estar envolvido em atividades e responsabilidades que me desafiem a ser técnico, criativo e engajado com meus objetivos.
        </Paragraph>
      </Expansible>
      <Card title='Um título legal' image='images/css.png' alt='Ilustração CSS' subtitle='Legenda' sideInfo='01/12/2015'>
        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, mollitia qui exercitationem voluptatem perspiciatis quidem placeat accusantium molestiae eveniet beatae at et consequuntur excepturi iusto aperiam quo obcaecati consectetur nihil.</Paragraph>
      </Card>
      <Spacing/>
      <Rate level={2}>
        NextJs
      </Rate>
    </div>
  )
}