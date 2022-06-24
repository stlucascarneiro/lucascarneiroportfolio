import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'atoms/theme'
import { Dropdown } from 'organisms'

describe('Menu Dropdown', () => {
  const clickHandler = jest.fn()
  const menuItems = [{ label: 'Item', onClick: clickHandler }]

  it('Renderiza inicialmente somente o trigger', () => {
    render(
      <ThemeProvider theme={theme}>
        <Dropdown menu={menuItems}>
          Menu Dropdown
        </Dropdown>
      </ThemeProvider>
    )
    const menu = screen.queryByRole('menu')
    expect(menu).not.toBeInTheDocument()
  })

  it('Renderiza um menu onClick', () => {
    render(
      <ThemeProvider theme={theme}>
        <Dropdown menu={menuItems}>
          Menu Dropdown
        </Dropdown>
      </ThemeProvider>
    )

    const button = screen.getByText('Menu Dropdown')

    fireEvent.click(button)

    const menu = screen.getByRole('menu')

    expect(menu).toBeInTheDocument()
  })
  it('Executa uma função onClick no Item do menu', () => {
    render(
      <ThemeProvider theme={theme}>
        <Dropdown
        menu={menuItems}>
          Menu Dropdown
        </Dropdown>
      </ThemeProvider>
    )

    const button = screen.getByText('Menu Dropdown')
    fireEvent.click(button)

    const item = screen.getByText('Item')
    fireEvent.click(item)

    expect(clickHandler).toHaveBeenCalled()
  })
})