import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'atoms/theme'
import { Avatar } from '..'

describe('Avatar', () => {
  it('Renderiza imagem, nome e legenda', () => {
    render(
      <ThemeProvider theme={theme}>
        <Avatar name='Lucas Carneiro' subtitle='Desenvolvedor Front-end' image='images/photo/avatar.png' alt='Fotografia de Lucas Carneiro'/>
      </ThemeProvider>
    )

    const image = screen.getByRole('avatar')
    const name = screen.getByRole('name')
    const subtitle = screen.getByRole('subtitle')

    expect(image).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })
})