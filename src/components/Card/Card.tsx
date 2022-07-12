// Config

// Components
import { MouseEventHandler } from 'react'
import { Body, Card, Header, Image, SideInfo, Subtitle, Title, TitleContainer } from './styles'
// Assets

// Types
interface IProps {
  children?: any
  title: string
  image?: string
  alt?: string
  subtitle?: string
  sideInfo?: string
  onClick?: MouseEventHandler
}

export const ComponentCard = ({ children, title, image, alt, subtitle, sideInfo, onClick }: IProps) => {
  return (
      <Card clickable={!!onClick}>
        <Header
          style={{ cursor: onClick ? 'pointer' : 'auto' }}
          onClick={(e) => onClick && onClick(e)}>
            {image && <Image alt={alt} src={image}/>}
            <TitleContainer>
                <Title role='title'>{title}</Title>
                {subtitle && <Subtitle role='subtitle'>{subtitle}</Subtitle>}
            </TitleContainer>
            {sideInfo && <SideInfo role='sideInfo'>{sideInfo}</SideInfo>}
        </Header>
        {children && <Body role='body'>
          {children}
        </Body>}
      </Card>
  )
}