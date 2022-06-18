/* eslint-disable no-undef */
// Config

// Components
import { Button } from './styles'
// Assets

// Types
import { ButtonHTMLAttributes } from 'react'
import { IconType } from 'react-icons'
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType
  style?: React.CSSProperties
  small?: boolean
  secondary?: boolean
}

export const ComponentButton = ({ children, onClick, icon: Icon, style, small = false, secondary = false }: IProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onClick && onClick(e)
  }
  return (
        <Button
          style={style}
          onClick={handleClick}
          small={small}
          secondary={secondary}>
            {Icon && <Icon style={{ marginRight: '0.5rem', fontSize: '18px' }}/>}
            {children}
        </Button>
  )
}