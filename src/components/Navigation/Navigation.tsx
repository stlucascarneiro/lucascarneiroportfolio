// Config

// Components
import { Navigation } from './styles'
// Assets

// Types
import { ButtonHTMLAttributes, useState } from 'react'
import { IconType } from 'react-icons'
import Link from 'next/link'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconType,
    path: string
}

export const ComponentNavigation = ({ children, icon, path }: IProps) => {
  const [active, setActive] = useState(false)
  const Icon = icon

  function handleClick() {
    setActive(!active)
  }

  return (
    <Link href={path}>
      <Navigation
          active={active}
          onClick={handleClick}>
          <Icon style={{ marginRight: '1.5rem', fontSize: '18px' }}/>
          {children}
      </Navigation>
    </Link>
  )
}