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

    @media ${Breakpoints.getBelow('tablet')} {
      flex-direction: column;
      align-items: center;
    }
`
export const Image = styled.img`
    width: min-content;
    height: min-content;
    margin-right: 1rem;

    @media ${Breakpoints.getBelow('tablet')} {
      /* height: 48px; */
      margin: 0 0 0.5rem 0;
    }
`
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    @media ${Breakpoints.getBelow('tablet')} {
      align-items: center;
    }
`
export const Title = styled.h3`
    color: ${({ theme }) => theme.color.element.strong};

    @media ${Breakpoints.getBelow('tablet')} {
      text-align: center;
    }
`
export const Subtitle = styled.small`
    font-style: italic;
    @media ${Breakpoints.getBelow('tablet')} {
      text-align: center;
    }
`
export const SideInfo = styled.small`
    
`
export const Body = styled.div`
    margin-top: 1rem;
`