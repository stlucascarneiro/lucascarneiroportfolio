import { createGlobalStyle } from 'styled-components'
import typography from 'atoms/typography'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        overflow: hidden;
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.color.element.regular};
        background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${'images/bg1-filter.png'});
        /* backdrop-filter: saturate(20%); */
        background-size: cover;
        background-position: right top;
    }
    #__next{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow-y: auto;
    }
    ${typography}
`
