import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    display: flex;
    justify-content: center;
  }

  body{
    ${({ theme }) => css`
      background: white;
      font-family: ${theme.fontFamily.regular};
      color: ${theme.colors.base.text};
    `}
  }
`
