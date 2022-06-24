import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    
    height: auto;

    background-color: ${({ theme }) => theme.color.background.glassy};
    border-radius: 4px;
    backdrop-filter: blur(16px);
    
    overflow: hidden;
    transition: .2s;

    margin: 8px;
`
export const Header = styled.div`
    display: flex;
`
export const Image = styled.img`
    width: min-content;
    height: min-content;
    margin-right: 1rem;
`
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`
export const Title = styled.h3`
    color: ${({ theme }) => theme.color.element.strong};
`
export const Subtitle = styled.small`
    font-style: italic;
`
export const SideInfo = styled.small`
    
`
export const Body = styled.div`
    margin-top: 1rem;
`