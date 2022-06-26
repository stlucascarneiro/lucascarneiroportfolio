// Config

// Components
import { Navigation } from './styles'
// Assets

// Types
import { ButtonHTMLAttributes } from 'react'
import { IconType } from 'react-icons'
import Link from 'next/link'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  index: number
  icon: IconType
  path: string
  active: boolean
  handleClick?: (index: number) => void
}

export const ComponentNavigation = ({ index, children, icon, path, active, handleClick }: IProps) => {
  const Icon = icon

  return (
    <Link href={path}>
      <Navigation
          active={active}
          onClick={() => handleClick && handleClick(index)}>
          <Icon style={{ marginRight: '1.5rem', fontSize: '18px' }}/>
          {children}
      </Navigation>
    </Link>
  )
}