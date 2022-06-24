// Config
import { useState } from 'react'
// Components
import { Body, Card, Header, Image, SideInfo, Subtitle, Title, TitleContainer, Chevron, SideContainer, ButtonContainer } from './styles'
// Assets

// Types
import { IconType } from 'react-icons'
import { Button } from 'components'
interface IButtons {
  icon: IconType
  label: string
}
interface IProps {
  title: string
  subtitle?: string
  sideInfo?: string
  children?: any
  image?: string
  expansible: boolean
  primaryButton?: IButtons
  secondaryButton?: IButtons
}

export const OrganismCard = ({ title, subtitle, sideInfo, children, image, expansible, primaryButton, secondaryButton }: IProps) => {
  const [open, setOpen] = useState(false)
  return (
      <Card
        expansible={expansible}
        open={open}>
        <Header onClick={() => setOpen(!open)} expansible={expansible}>
          {image && <Image src={image}/>}
          <TitleContainer>
            <Title>{title}</Title>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </TitleContainer>
          <SideContainer>
          {expansible
            ? <Chevron open={open}/>
            : <SideInfo>{sideInfo}</SideInfo>}
          </SideContainer>
        </Header>
        <Body open={open}>
          {children}
          {(primaryButton || secondaryButton) &&
          <ButtonContainer>
            {secondaryButton &&
            <Button
              icon={secondaryButton.icon}
              secondary={true}
              style={{ marginRight: '1rem' }}
              small={true}>
                {secondaryButton.label}
            </Button>}
            {primaryButton &&
              <Button icon={primaryButton.icon} small={true}>
                {primaryButton.label}
              </Button>}
          </ButtonContainer>}
        </Body>
      </Card>
  )
}