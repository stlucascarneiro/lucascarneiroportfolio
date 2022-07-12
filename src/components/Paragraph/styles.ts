import styled from 'styled-components'
import { Breakpoints } from 'utils/breakpoints'

export const Paragraph = styled.div`
    margin-bottom: 1rem;
`

export const Title = styled.h4`
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.color.brand.secondary};
    margin-bottom: 0.5rem;
`

export const Text = styled.p`
  color: ${({ theme }) => theme.color.element.regular};
  margin-bottom: 0.5rem;
  

  @media ${Breakpoints.getBelow('tablet')} {
    margin-bottom: 1rem;
  }
`