import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'atoms/theme'
import icons from 'atoms/icons'
import { Expansible } from 'organisms'

describe('Cartão Expansível', () => {
  it('Expande e exibe texto e botões onClick', () => {
    render(
      <ThemeProvider theme={theme}>
        <Expansible
            title="Um título legal"
            subtitle='Legenda'
            primaryButton = {{ icon: icons.navigation, label: 'Primário' }}
            secondaryButton={{ icon: icons.github, label: 'Secundário' }}
            image='images/css.png'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis accusamus vero enim dolorum maxime nam ratione delectus obcaecati. Commodi eligendi porro vitae perferendis quisquam cum fugiat nihil unde nesciunt sequi?
        </Expansible>
      </ThemeProvider>
    )

    const header = screen.getByRole('header')
    fireEvent.click(header)

    const body = screen.getByRole('body')
    const primaryButton = screen.getByText('Primário')
    const secondaryButton = screen.getByText('Secundário')

    expect(body).toHaveStyle('display: block')
    expect(primaryButton).toBeInTheDocument()
    expect(secondaryButton).toBeInTheDocument()
  })
})