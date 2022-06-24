// Config

// Components
import { IconType } from 'react-icons'
import { Dropdown, Trigger, Item, Menu } from './styles'
import { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import Icons from 'atoms/icons'
import { useOpenMenu } from 'hooks'
// Assets

// Types
interface IMenu extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    icon?: IconType
    onClick: MouseEventHandler<HTMLButtonElement>
}
interface IProps {
  children: string
  menu: IMenu[]
}

export const OrganismDropdown = ({ children, menu } : IProps) => {
  const { openMenu, setOpenMenu } = useOpenMenu(false)
  const menuAnimation = {
    initial: { scale: 0.5, opacity: 0.5 },
    animate: { top: 32, opacity: 1 }
  }

  return (
      <Dropdown>
        <Trigger
          className='DropdownTrigger'
          onClick={() => { setOpenMenu(!openMenu) }}>
            {children}
            <Icons.chevronDown style={{ fontSize: '20px', marginLeft: '4px' }}/>
        </Trigger>
        {openMenu &&
        <Menu
          role="menu"
          variants={menuAnimation}
          animate="animate"
          transition={{ duration: 0.25 }}>
            {menu.map((elem, index) => (
                <Item
                  key={index}
                  className='DropdownItem'
                  onClick={(e) => {
                    elem.onClick(e)
                    setOpenMenu(false)
                  }}>
                    {elem.icon && <elem.icon/>}
                    {elem.label}
                </Item>
            ))}
        </Menu>}
      </Dropdown>
  )
}