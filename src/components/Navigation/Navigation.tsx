// Components
import { Anchor, Navigation } from './styles'
// Assets

// Types
import { ButtonHTMLAttributes, CSSProperties } from 'react'
import { IconType } from 'react-icons'
import Link from 'next/link'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  index: number
  icon: IconType
  path: string
  active: boolean
  style?: CSSProperties
  blank?: boolean
  handleClick?: (index: number) => void
}

export const ComponentNavigation = ({ index, children, icon, path, active, handleClick, style, blank = false }: IProps) => {
  const Icon = icon

  if (blank) {
    return (
      <Anchor href={path} target='_blank' rel='noreferrer'>
        <Navigation
          style={style}
          active={active}
          onClick={() => handleClick && handleClick(index)}>
          <Icon style={{ marginRight: '1.5rem', fontSize: '18px' }}/>
          {children}
        </Navigation>
      </Anchor>
    )
  }

  return (
    <Link href={path}>
      <Navigation
          style={style}
          active={active}
          onClick={() => handleClick && handleClick(index)}>
          <Icon style={{ marginRight: '1.5rem', fontSize: '18px' }}/>
          {children}
      </Navigation>
    </Link>
  )
}