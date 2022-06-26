import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'atoms/theme'
import { Navbar } from 'organisms'
import icons from 'atoms/icons'
import { createMockRouter } from 'utils/test/createMockRouter'
import { RouterContext } from 'next/dist/shared/lib/router-context'

describe('Navbar', () => {
  it('Controla o indicador da página atual', () => {
    const router = createMockRouter({})
    render(
      <RouterContext.Provider value={router}>
        <ThemeProvider theme={theme}>
          <Navbar menu={[
            { icon: icons.user, label: 'Perfil', path: '/Perfil' },
            { icon: icons.briefcase, label: 'Carreira', path: '/Perfil' }
          ]}/>
        </ThemeProvider>
      </RouterContext.Provider>
    )

    const item1 = screen.getByText('Perfil')
    const item2 = screen.getByText('Carreira')

    expect(item1).toHaveStyle(`background-color: ${theme.color.background.inverse}`)
    expect(item2).toHaveStyle('background-color: transparent')

    fireEvent.click(item2)

    expect(item1).toHaveStyle('background-color: transparent')
    expect(item2).toHaveStyle(`background-color: ${theme.color.background.inverse}`)
  })
})