import { useEffect, useState } from 'react'
import { IconType } from 'react-icons'

export enum pages {
  'perfil',
  'habilidades',
  'projetos',
  'carreira',
  'educacao',
  'contato'
}
interface IMenu {
  icon: IconType
  label: string
  path: string
}

export const hookUseNavbarItem = (menu: IMenu[]) => {
  const [itemActive, setItemActive] = useState<boolean[]>([])

  function setActive(page : pages) {
    const pageIndex = Number(pages[page])
    setItemActive(() => (
      menu.map((_, index) => {
          if(index === pageIndex) return true
          return false
      })
    ))
  }

  useEffect(() => {
    const page: any = location.pathname.substring(1)
    setActive(page)
  }, [])

  return { itemActive, setActive }
}