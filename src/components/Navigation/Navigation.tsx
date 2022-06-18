// Config

// Components
import { Navigation } from './styles'
// Assets

// Types
import { ButtonHTMLAttributes, useState } from 'react'
import { IconType } from 'react-icons'
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconType,
    small?: boolean
}

export const ComponentNavigation = ({ children, icon }: IProps) => {
  const [active, setActive] = useState(false)
  const Icon = icon
  return (
    <Navigation
        active={active}
        onClick={() => setActive(!active)}>
        <Icon style={{ marginRight: '1.5rem', fontSize: '18px' }}/>
        {children}
    </Navigation>
  )
}