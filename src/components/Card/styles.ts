import icons from 'atoms/icons'
import styled from 'styled-components'

interface CardProps {
    expansible?: boolean
    open?: boolean
}
export const Card = styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    padding: ${({ open }) => open ? '20px 16px' : '16px'};
    
    height: auto;

    background-color: ${({ theme }) => theme.color.background.glassy};
    border-radius: 4px;
    backdrop-filter: blur(16px);
    
    overflow: hidden;
    transition: .2s;

    margin: 8px;

    &:hover {
        padding: ${({ expansible, open }) => (expansible && !open) ? '20px 16px' : ''};
        transition: .2s;
    }
`

export const Header = styled.div<CardProps>`
    display: flex;
    cursor: ${({ expansible }) => expansible ? 'pointer' : ''};
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
`
export const Title = styled.h3`
    padding-left: 8px;

    color: ${({ theme }) => theme.color.element.strong};
`
export const Subtitle = styled.small`
    padding-left: 8px;

    font-style: italic;
`

export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`
export const SideInfo = styled.small`
    
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
`

export const Body = styled.div<CardProps>`
    display: ${({ open }) => open ? '' : 'none'};
    margin-top: 1rem;
`

interface IconProps {
    open: boolean
}
export const Chevron = styled(icons.chevronDown)<IconProps>`
    font-size: 26px;
    transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: .6s;
`