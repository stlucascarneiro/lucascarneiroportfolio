// Config
import { useState } from 'react'
import { useDevice, useNavbarItem } from 'hooks'
// Components
import { Avatar, Navigation } from 'components/'
import { Body, Footer, Header, MobileHeader, Navbar, Overlay, Title } from './styles'
// Assets
import Icons from 'atoms/icons'
// Types
import { IconType } from 'react-icons'
interface IMenu {
  icon: IconType
  label: string
  path: string
}
interface IProps {
  menu: IMenu[]
}

export const OrganismNavbar = ({ menu }: IProps) => {
  const { itemActive, setItemActive } = useNavbarItem(menu)
  const [openNavbar, setOpenNavbar] = useState(false)
  const device = useDevice()
  const animation = {
    animate: { right: openNavbar ? 0 : '-220px' }
  }

  function handleMenuClick(index : number) {
    setItemActive((prevValue) => {
      return prevValue.map((_, i) => {
        if (i === index) return true
        return false
      })
    })
  }

  return (
    <>
      <MobileHeader>
        <Avatar
          name='Lucas Carneiro'
          subtitle='Desenvolvedor Front-end'
          image='images/photo/avatar.png'
          alt='Fotografia de Lucas Carneiro'/>
        <Icons.menu role='trigger' onClick={() => setOpenNavbar(!openNavbar)}/>
      </MobileHeader>
      {openNavbar && <Overlay role='overlay' onClick={() => setOpenNavbar(false)}/>}
      <Navbar
        role="navbar"
        variants={animation}
        animate="animate"
        transition={{ ease: 'easeOut', duration: 0.6 }}>
        <Header>
          {device > 3
            ? <Avatar
            name='Lucas Carneiro'
            subtitle='Desenvolvedor Front-end'
            image='images/photo/avatar.png'
            alt='Fotografia de Lucas Carneiro'/>
            : <>
            <Title>Menu</Title>
            <Icons.close onClick={() => setOpenNavbar(false)}/>
            </>}
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
          <Navigation index={1} icon={Icons.github} path='' active={false}>
            stlucascarneiro
          </Navigation>
          <Navigation index={2} icon={Icons.linkedin} path='' active={false}>
            stlucascarneiro
          </Navigation>
        </Footer>
      </Navbar>
    </>
  )
}