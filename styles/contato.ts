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

export const NavigationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Break = styled.br`
  @media (min-width: 370px) {
    display: none;
  }
`