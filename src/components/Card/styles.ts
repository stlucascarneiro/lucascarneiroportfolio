import styled from 'styled-components'
import { Breakpoints } from 'utils/breakpoints'

interface ICardProps {
    clickable: boolean
}
export const Card = styled.div<ICardProps>`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-bottom: 2rem;

    height: auto;

    background-color: ${({ theme }) => theme.color.background.glassy};
    backdrop-filter: blur(16px);
    border-radius: 4px;

    overflow: hidden;
    transition: .2s;

    &:hover {
        background-color: ${({ clickable }) => clickable ? 'rgba(11,19,30,0.4)' : ''} ;
        transition: .3s;
    }

    @media ${Breakpoints.getBelow('tablet')} {
      margin-bottom: 1rem;
    }
`
export const Header = styled.div`
    display: flex;
`
export const Image = styled.img`
    width: min-content;
    height: min-content;
    margin-right: 1rem;

    @media ${Breakpoints.getBelow('tablet')} {
      height: 48px;
    }
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