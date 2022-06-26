// Config

// Components
import icons from 'atoms/icons'
import { Navigation } from 'components/'
import { useState } from 'react'
import { IconType } from 'react-icons'
import { Avatar, Body, Footer, Header, Name, Navbar, Subtitle, TitleContainer } from './styles'
// Assets

// Types
interface IMenu {
  icon: IconType
  label: string
  path: string
}
interface IProps {
  menu: IMenu[]
}

export const OrganismNavbar = ({ menu }: IProps) => {
  const [itemActive, setItemActive] = useState(
    menu.map((_, index) => {
      if (index === 0) return true
      return false
    })
  )

  function handleMenuClick(index : number) {
    setItemActive((prevValue) => {
      return prevValue.map((_, i) => {
        if (i === index) return true
        return false
      })
    })
  }

  return (
    <Navbar>
      <Header>
        <Avatar/>
        <TitleContainer>
          <Name></Name>
          <Subtitle></Subtitle>
        </TitleContainer>
      </Header>
      <Body>
        {menu.map((elem, index) => (
          <Navigation
            key={index}
            index={index}
            icon={elem.icon}
            path={elem.path}
            active={itemActive[index]}
            handleClick={handleMenuClick}>
            {elem.label}
          </Navigation>
        ))}
      </Body>
      <Footer>
        <Navigation index={1} icon={icons.github} path='' active={false}>
          stlucascarneiro
        </Navigation>
        <Navigation index={2} icon={icons.linkedin} path='' active={false}>
          stlucascarneiro
        </Navigation>
      </Footer>
    </Navbar>
  )
}