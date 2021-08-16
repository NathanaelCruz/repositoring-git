import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-family: 'Spartan', sans-serif;
    font-size: ${props => props.theme.fonts.sizes.md};
    color: ${props => props.theme.colors.font};
    background-color: ${props => props.theme.colors.bgColor};
  }

  button,
  input,
  textarea{
    font: 400 ${props => props.theme.fonts.sizes.md} 'Spartan', sans-serif;
    padding: .8rem;
    border-radius: ${props => props.theme.measures(0.6, 'rem')};
  }

  p{
    font: 400 ${props => props.theme.fonts.sizes.md} 'Spartan', sans-serif;
  }

  h1{
    font: 400 3rem 'Pattaya', sans-serif;
  }

  a{
    color: ${props => props.theme.colors.font};
  }

`

export default GlobalStyles