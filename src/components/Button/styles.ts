import styled from 'styled-components'

interface ButtonProps {
    small: boolean
    secondary: boolean
}
export const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    padding: ${({ small }) => small ? '4px 8px' : '0.5rem 1rem'};
    
    height: fit-content;
    
    background-color: ${({ theme, secondary }) => secondary ? theme.color.background.inverse : theme.color.brand.primary};
    color: ${({ theme, secondary }) => secondary ? theme.color.element.inverse : theme.color.element.strong};
    border: none;
    border-radius: 4px;
    
    font-weight: ${({ small, secondary }) => (small && !secondary) ? '300' : '400'};
    font-size: ${({ small }) => small ? '13px' : ''};

    transition: .3s;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme, secondary }) => secondary ? theme.color.background.inverseHover : theme.color.brand.hover};
        box-shadow: 0px 0px 6px 0px ${({ theme, secondary }) => secondary ? 'white' : theme.color.brand.primary};

        transition: .3s;
    }
`
