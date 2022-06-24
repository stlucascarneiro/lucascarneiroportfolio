import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'atoms/theme'
import { Card } from 'components'

describe('Cartão Simples', () => {
  it('Renderiza somente título e texto', () => {
    render(
      <ThemeProvider theme={theme}>
        <Card title="Um título legal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis possimus?
        </Card>
      </ThemeProvider>
    )

    const title = screen.getByRole('title')
    const body = screen.getByRole('body')

    expect(title).toBeInTheDocument()
    expect(body).toBeInTheDocument()
  })
  it('Renderiza opcionalmente imagem, legenda, e texto lateral', () => {
    render(
      <ThemeProvider theme={theme}>
        <Card title="Um título legal" image='images/css.png' alt='Ilustração CSS' subtitle='Legenda' sideInfo='01/12/2015'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis possimus?
        </Card>
      </ThemeProvider>
    )

    const image = screen.getByRole('img')
    const subtitle = screen.getByRole('subtitle')
    const sideInfo = screen.getByRole('sideInfo')

    expect(image).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(sideInfo).toBeInTheDocument()
  })
})