// Config

// Components
import { Paragraph, Title, Text } from './styles'
// Assets

// Types
interface IProps {
  children: string
  title?: string
}

export const ComponentParagraph = ({ children, title }: IProps) => {
  return (
      <Paragraph>
        <Title role='title'>{title}</Title>
        <Text role='paragraph'>{children}</Text>
      </Paragraph>
  )
}