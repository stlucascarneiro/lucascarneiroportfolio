import { render, screen } from '@testing-library/react'

describe('Botão', () => {
  it('renders a heading', () => {
    render(<button>teste</button>)

    const heading = screen.getByText(/teste/i)

    expect(heading).toBeInTheDocument()
  })
})