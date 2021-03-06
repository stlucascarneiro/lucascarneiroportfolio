import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Breakpoints } from 'utils/breakpoints'

export const MobileHeader = styled.div`
  display: none;
  justify-content: space-between;
  font-size: 32px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.background.glassy};
  backdrop-filter: blur(12px);

  @media ${Breakpoints.getBelow('tablet')} {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
`
export const Navbar = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 6;

  width: fit-content;
  max-width: 220px;
  height: 100%;

  background-color: rgba(18, 29, 46, 0.4);
  backdrop-filter: blur(1rem);
  transition: .5;

  @media ${Breakpoints.getBelow('tablet')} {
    position: fixed;
    top: 0;
    right: -220px;
    transition: .5 ease-in-out;
  }
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: space-between;
  font-size: 24px;

  @media ${Breakpoints.getBelow('tablet')} {
    margin-bottom: 1rem;
  }
`
export const Title = styled.h1`
  font-weight: 400;
  font-size: 15px;
`
export const Body = styled.div`
  flex-grow: 1;
  width: 100%;
  min-width: 170px;
`
export const Footer = styled.div`
    
`