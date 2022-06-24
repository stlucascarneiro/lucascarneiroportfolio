// Config

// Components
import { Paragraph, Title, Text } from './styles'
// Assets

// Types
interface IProps {
  children: any
  title?: string
}

export const ComponentParagraph = ({ children, title }: IProps) => {
  return (
      <Paragraph>
        {title && <Title role='title'>{title}</Title>}
        <Text role='paragraph'>
          {children}
        </Text>
      </Paragraph>
  )
}