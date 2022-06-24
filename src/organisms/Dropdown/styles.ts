import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Dropdown = styled.div`
    position: relative;
    display: flex;

    width: fit-content;
`

export const Trigger = styled.button`
    display: flex;
    align-items: center;
    padding: 8px 8px;

    background-color: transparent;
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.element.regular};

    transition: .3s;
    cursor: pointer;

    &:hover {
        /* background-color: rgba(0, 0, 0, 0.5); */
        transition: .3s;
        color: ${({ theme }) => theme.color.element.strong};
    }
`

export const Menu = styled(motion.div)`
    position: absolute;
    top: 0px;
    right: 0;
    z-index: 4;

    display: flex;
    flex-direction: column;
    padding: 4px 0;

    width: 100%;
    
    background-color: ${({ theme }) => theme.color.background.glassy};
    border-radius: 4px;
    opacity: 0;
    backdrop-filter: blur(16px);
`

export const Item = styled.button`
    margin: 4px 0;

    background-color: transparent;
    color: white;
    border: none;
    
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.25);
    }
`