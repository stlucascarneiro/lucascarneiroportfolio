import styled from 'styled-components'

interface NavigationProps {
    active: boolean
}

export const Navigation = styled.button<NavigationProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem;
    margin-right: 1rem;
    
    /* min-width: 170px; */
    width: fit-content;

    background-color: ${({ active, theme }) => active ? theme.color.background.inverse : 'transparent'};
    color: ${({ active, theme }) => active ? theme.color.element.inverse : theme.color.element.strong};
    border: none;
    border-radius: 4px;
    
    transition: .4s;

    cursor: pointer;

    &:hover {
        background-color: ${({ active }) => active ? '' : 'rgba(0, 0, 0, 0.3)'};
        transition: .4s;
    }
`