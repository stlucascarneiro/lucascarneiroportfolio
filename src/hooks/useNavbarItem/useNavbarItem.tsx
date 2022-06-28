import { useEffect, useState } from 'react'
import { IconType } from 'react-icons'

enum pages {
    'perfil',
    'habilidades',
    'projetos',
    'carreira',
    'educação',
    'contato'
}
interface IMenu {
    icon: IconType
    label: string
    path: string
  }

export const hookUseNavbarItem = (menu: IMenu[]) => {
  const [itemActive, setItemActive] = useState<boolean[]>([])

  useEffect(() => {
    const page: any = location.pathname.substring(1)
    const pageIndex = Number(pages[page])
    setItemActive(() => (
        menu.map((_, index) => {
            if(index === pageIndex) return true
            return false
        })
    ))
  }, [])

  return { itemActive, setItemActive }
}