import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'atoms/theme'
import { Rate } from '..'

describe('Avaliação', () => {
  it('Renderiza uma etiqueta e uma representação de nível', () => {
    render(
      <ThemeProvider theme={theme}>
        <Rate level={2}>
            NextJs
        </Rate>
      </ThemeProvider>
    )

    const label = screen.getByRole('label')
    const level = screen.getByRole('level')

    expect(label).toBeInTheDocument()
    expect(level).toBeInTheDocument()
  })
})