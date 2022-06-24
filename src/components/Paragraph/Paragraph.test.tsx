import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'atoms/theme'
import { Paragraph } from 'components'

describe('Parágrafo', () => {
  it('Rendezira somente o parágrafo', () => {
    render(
      <ThemeProvider theme={theme}>
        <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, voluptas inventore, quae eos unde obcaecati laboriosam neque ad porro tempore sed dolore necessitatibus reiciendis, quo sunt alias quod ipsa. Consequatur.
        </Paragraph>
      </ThemeProvider>
    )

    const paragraph = screen.getByRole('paragraph')

    expect(paragraph).toBeInTheDocument()
  })
  it('Rendezira título e parágrafo', () => {
    render(
      <ThemeProvider theme={theme}>
        <Paragraph title='Título'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, voluptas inventore, quae eos unde obcaecati laboriosam neque ad porro tempore sed dolore necessitatibus reiciendis, quo sunt alias quod ipsa. Consequatur.
        </Paragraph>
      </ThemeProvider>
    )

    const title = screen.getByRole('title')
    const paragraph = screen.getByRole('paragraph')

    expect(title).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()
  })
})