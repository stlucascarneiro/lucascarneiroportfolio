import { useEffect, useState } from 'react'

export const hookUseOpenMenu = (initialState: boolean) => {
  const [openMenu, setOpenMenu] = useState(initialState)

  const callback = (e: MouseEvent) => {
    const target = e.target
    const dropdownTrigger = document.querySelector('.DropdownTrigger')
    const dropdownItems = document.querySelectorAll('.DropdownItem')

    let outsideClick = false
    for (let i = 0; i < dropdownItems.length; i++) {
      const elem = dropdownItems[i]
      if (elem === target) {
        outsideClick = true
        continue
      }
    }
    if (target === dropdownTrigger) {
      outsideClick = true
    }

    window.removeEventListener('mouseup', callback)
    !outsideClick && setOpenMenu(false)
  }

  useEffect(() => {
    if (openMenu) {
      window.addEventListener('mouseup', callback)
    }
  }, [openMenu])

  return { openMenu, setOpenMenu }
}