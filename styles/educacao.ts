import styled from 'styled-components'
import { Breakpoints } from 'utils/breakpoints'

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow-y: auto;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem;

  width: 100%;
  max-width: 1200px;
`

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 20px;

  @media ${Breakpoints.getBelow('tablet')} {
    font-size: 16px;
  }
`

export const Anchor = styled.a`
    color: ${({ theme }) => theme.color.element.regular};
    font-weight: 300;
    text-decoration: none;

    &:hover{
        color: ${({ theme }) => theme.color.brand.secondary};
        text-decoration: underline;
    }
`