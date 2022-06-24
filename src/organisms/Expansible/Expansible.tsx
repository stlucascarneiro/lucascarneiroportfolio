// Config
import { useState } from 'react'
// Components
import { Body, Card, Header, Image, Subtitle, Title, TitleContainer, Chevron, ButtonContainer } from './styles'
// Assets

// Types
import { IconType } from 'react-icons'
import { Button } from 'components'
interface IButtons {
  icon: IconType
  label: string
}
interface IProps {
  children?: any
  title: string
  image?: string
  alt?: string
  subtitle?: string
  primaryButton?: IButtons
  secondaryButton?: IButtons
}

export const OrganismExpansible = ({ title, subtitle, children, image, primaryButton, secondaryButton }: IProps) => {
  const [open, setOpen] = useState(false)
  return (
      <Card
        open={open}>
        <Header onClick={() => setOpen(!open)} role="header">
          {image && <Image src={image}/>}
          <TitleContainer>
            <Title>{title}</Title>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </TitleContainer>
          <Chevron open={open}/>
        </Header>
        <Body open={open} role='body'>
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