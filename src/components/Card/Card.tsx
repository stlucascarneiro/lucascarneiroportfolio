// Config

// Components
import { Body, Card, Header, Image, SideInfo, Subtitle, Title, TitleContainer } from './styles'
// Assets

// Types
interface IProps {
  children: any
  title: string
  image?: string
  alt?: string
  subtitle?: string
  sideInfo?: string
}

export const ComponentCard = ({ children, title, image, alt, subtitle, sideInfo }: IProps) => {
  return (
      <Card>
        <Header>
            {image && <Image alt={alt} src={image}/>}
            <TitleContainer>
                <Title role='title'>{title}</Title>
                {subtitle && <Subtitle role='subtitle'>{subtitle}</Subtitle>}
            </TitleContainer>
            {sideInfo && <SideInfo role='sideInfo'>{sideInfo}</SideInfo>}
        </Header>
        <Body role='body'>
          {children}
        </Body>
      </Card>
  )
}