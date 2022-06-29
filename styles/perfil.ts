import styled from 'styled-components'

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

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Title = styled.h3`
    font-size: 24px;
    color: ${({ theme }) => theme.color.element.strong};
    margin: 2rem 0 0 1rem;
`