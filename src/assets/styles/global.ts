import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5% !important;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:hover,
    &:focus {
      outline: none;
    }
  }

  html, body {
    height: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;
  }

  html {
    height: -webkit-fill-available;
  }

  body {
    background-color: ${props => props.theme.page.body};
    display: flex;
    flex-direction: column;
  }

  body,
  input,
  button,
  textarea {
    font-size: 1.6rem;
    font-family: Poppins !important;
    font-weight: normal;
  }

  img {
    display: block;
    max-width: 100%;
  }

  /* ul {
    list-style: none;
  } */

  /* .MuiTooltip-tooltip {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    font-size: 1.2rem;
  } */

  /* #notistack-snackbar {
    font-size: 1.3rem;
    font-weight: 500;
    max-width: 25rem;
  } */

  .MuiGrid-grid-xs-6 {
    max-width: 100%;
  }

  .MuiGrid-item {
    flex-grow: 1;
  }
`

export default GlobalStyle