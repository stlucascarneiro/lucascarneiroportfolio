import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'atoms/theme'
import { Navigation } from 'components'
import icons from 'atoms/icons'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { createMockRouter } from 'utils/test/createMockRouter'

describe('Botão Navegação', () => {
  it('Navega para uma rota onClick', () => {
    const router = createMockRouter({})
    render(
      <RouterContext.Provider value={router}>
        <ThemeProvider theme={theme}>
          <Navigation index={0} icon={icons.briefcase} path="/carreira" active={false}>
            Carreira
          </Navigation>
        </ThemeProvider>
      </RouterContext.Provider>
    )

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(router.push).toHaveBeenCalled()
  })
})