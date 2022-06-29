// Config

// Components
import { Avatar, Image, Name, NameContainer, Subtitle } from './styles'
// Assets

// Types
interface IProps {
  name: string
  subtitle: string
  image: string
  alt: string
  large?: boolean
  style?: any
}

export const ComponentAvatar = ({ name, subtitle, image, alt, large = false, style }: IProps) => {
  return (
    <Avatar style={style}>
      <Image role="avatar" src={image} alt={alt} large={large}/>
      <NameContainer>
        <Name role="name" large={large}>{name}</Name>
        <Subtitle role="subtitle" large={large}>{subtitle}</Subtitle>
      </NameContainer>
    </Avatar>
  )
}