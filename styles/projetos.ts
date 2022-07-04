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

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 20px;
`
export const SectionTitle = styled.h4`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.color.element.regular};
  border-bottom: 1px solid ${({ theme }) => theme.color.element.inverse};

  font-weight: 300;

  padding-bottom: 0.5rem;
  margin: 2rem 0;
`