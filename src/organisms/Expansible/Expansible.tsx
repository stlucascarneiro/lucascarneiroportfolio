// Config
import { useState } from 'react'
// Components
import { Body, Expansible, Header, Image, Subtitle, Title, TitleContainer, Chevron, ButtonContainer, Anchor } from './styles'
// Assets

// Types
import { IconType } from 'react-icons'
import { Button } from 'components'
interface IButtons {
  icon: IconType
  label: string
  href: string
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
      <Expansible
        open={open}>
        <Header onClick={() => setOpen(!open)} role="header">
          {image && <Image src={image}/>}
          <TitleContainer>
            <Title>{title}</Title>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            <Subtitle>Leia mais ...</Subtitle>
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
              small={true}>
                <Anchor
                  href={secondaryButton.href}
                  target='_blank'
                  rel="noreferrer"
                  style={{ fontWeight: '400' }}>
                  {secondaryButton.label}
                </Anchor>
            </Button>}
            {(primaryButton && primaryButton.href.length > 0) &&
              <Button
                icon={primaryButton.icon}
                small={true}
                style={{ marginLeft: '1rem' }}>
                <Anchor href={primaryButton.href} target='_blank' rel="noreferrer">
                  {primaryButton.label}
                </Anchor>
              </Button>}
          </ButtonContainer>}
        </Body>
      </Expansible>
  )
}