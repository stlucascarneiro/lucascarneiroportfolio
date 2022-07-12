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
export const LabelContainer = styled.div`
  display: flex;
  margin-top: 2rem;

  @media ${Breakpoints.getBelow('tablet')} {
    flex-direction: column;
  }
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;

  @media ${Breakpoints.getBelow('tablet')} {
    margin: 0.25rem 0;
  }
`
interface IFlagProps {
    color: 'error' | 'warning' | 'success'
}
export const Flag = styled.div<IFlagProps>`
  margin-right: 0.5rem;

  width: 32px;
  height: 16px;

  background-color: ${({ theme, color }) => theme.color.feedback[color]};
`
export const Label = styled.label`
  font-weight: 300;
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${Breakpoints.getBelow('tablet')} {
    justify-content: center;
  }
`