import icons from 'atoms/icons'
import styled from 'styled-components'
import { Breakpoints } from 'utils/breakpoints'

interface CardProps {
    open?: boolean
}
export const Expansible = styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    padding: ${({ open }) => open ? '20px 16px' : '16px'};
    margin: 0 0 2rem 0;
    
    height: auto;

    background-color: ${({ theme }) => theme.color.background.glassy};
    border-radius: 4px;
    backdrop-filter: blur(16px);
    
    overflow: hidden;
    transition: .3s;

    &:hover {
        background-color: rgba(11,19,30,0.4);
        transition: .3s;
    }
`

export const Header = styled.div`
    display: flex;
    cursor: pointer;

    @media ${Breakpoints.getBelow('tablet')} {
      flex-direction: column;
      align-items: center;
    }
`
export const Image = styled.img`
    width: min-content;
    height: min-content;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0 0.5rem;

    @media ${Breakpoints.getBelow('tablet')} {
      align-items: center;
      margin-top: 1rem;
    }
`
export const Title = styled.h3`
    padding-left: 8px;

    color: ${({ theme }) => theme.color.element.strong};
`
export const Subtitle = styled.small`
    padding-left: 8px;
    margin-top: 0.5rem;
    font-style: italic;
    width: fit-content;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
`

export const Body = styled.div<CardProps>`
    display: ${({ open }) => open ? '' : 'none'};
`

interface IconProps {
    open: boolean
}
export const Chevron = styled(icons.chevronDown)<IconProps>`
    font-size: 26px;
    transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: .6s;
`

export const Anchor = styled.a`
  text-decoration: none;
  color: unset;
  font-weight: 300;
`