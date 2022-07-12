// Config

// Components
import { Paragraph, Title, Text } from './styles'
// Assets

// Types
interface IProps {
  children: any
  title?: string
  paragraphs?: string[]
}

export const ComponentParagraph = ({ children, title, paragraphs }: IProps) => {
  return (
      <Paragraph>
        {title && <Title role='title'>{title}</Title>}
        {paragraphs
          ? paragraphs.map((elem, index) => (
          <Text
            key={index}
            role='paragraph'>
              {elem}
          </Text>))
          : <Text role='paragraph'>
              {children}
            </Text>
        }
      </Paragraph>
  )
}