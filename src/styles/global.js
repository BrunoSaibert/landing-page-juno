import { createGlobalStyle } from 'styled-components';
import theme from "./theme";

const arrTypography = [
  { tag: "p", size: "sm" },
  { tag: "h1", size: "xxl" },
  { tag: "h2", size: "xl" },
  { tag: "h3", size: "lg" },
  { tag: "h4", size: "md" },
  { tag: "h5", size: "sm" },
  { tag: "h6", size: "xs" }
];

const typography = (media = 0) => {
  const retorno = arrTypography
    .map(
      ({ tag, size }) =>
        `${tag} { font-size: ${theme.fontSizes[size][media]}; line-height: calc(${theme.fontSizes[size][media]} + 5px);}`
    )
    .join(" ");
  return retorno;
};



export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-size: ${theme.fontSizes.sm[0]};
    font-weight: 400;
    font-family: ${theme.fonts[0]}, sans-serif;
  }

  .pointer {
    cursor: pointer;
  }

  .img-responsive {
    display: block;
    width: 100%;
    max-width: 100%;
  }

  ${typography()}

  @media (max-width: ${theme.breakpoints.md}px) {
    ${typography(1)}
  }

  a {
    color: inherit;
    text-decoration: underline;
    
    :hover {
      color: inherit;
      opacity: 0.7;
      
      @media (max-width: ${props => props.theme.breakpoints.md}px) {
        opacity: 1;
      }
    }
  }
`;