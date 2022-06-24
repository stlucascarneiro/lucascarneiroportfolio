// Config

// Components
import theme from 'atoms/theme'
import { Label, LevelContainer, Pill, Rate } from './styles'
// Assets

// Types
interface IProps {
  children: string
  level: 1 | 2 | 3
}

export const ComponentRate = ({ children, level }: IProps) => {
  const levelColor = [
    theme.color.feedback.error,
    theme.color.feedback.warning,
    theme.color.feedback.success
  ]
  return (
      <Rate>
        <Label role='label'>
          {children}
        </Label>
        <LevelContainer role='level'>
            <Pill levelColor={levelColor[level - 1]} active={true}/>
            <Pill levelColor={levelColor[level - 1]} active={level >= 2}/>
            <Pill levelColor={levelColor[level - 1]} active={level === 3}/>
        </LevelContainer>
      </Rate>
  )
}