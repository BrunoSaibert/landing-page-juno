import styled, { createGlobalStyle } from "styled-components";

export const ButtonGroupStyle = styled.div`
  display: flex;
  align-items: center;

  .btn {
    margin-right: 10px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}px) {
    flex-direction: column;
  }
`;

export const ButtonBase = createGlobalStyle`
  .btn{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 2px;
    height: 40px;
    padding: 0 32px;
    font-weight: ${props => props.theme.fontWeight.semiBold};
    transition: all 0.4s;
    background: ${props => props.theme.grayScale.light_20};

    &:hover{
      background: ${props => props.theme.grayScale.light_30};
    }
  }
`;

export const ButtonStyle = styled.button.attrs({
  className: "btn"
})`  
  background: ${props => props.theme.color.secondary};
  color: ${props => props.theme.grayScale.light};
  
  :hover{
    color: ${props => props.theme.grayScale.light_30};
    background: ${props => props.theme.color.secondary_dark};
  }
  

  @media (max-width: ${props => props.theme.breakpoints.sm}px) {
    margin: 0 auto;
  }
`;

export const ButtonAppStyle = styled.button.attrs({
  className: "btn"
})`
  height: auto;
  min-width: 200px;
  padding: 10px 32px;
  text-align: left;
  font-size: ${props => props.theme.fontSizes.xs[0]};
  line-height: calc(${props => props.theme.fontSizes.xs[0]} + 5px);
  letter-spacing: 1px;
  color: ${props => props.theme.grayScale.light};
  background: ${props => props.theme.grayScale.dark};
  
  :hover{
    color: ${props => props.theme.grayScale.light_30};
    background: ${props => props.theme.grayScale.dark_90};
  }

  svg {
    font-size: ${props => props.theme.fontSizes.lg[0]};
    margin-right: 10px;
  }

  big {
    display: block;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}px) {
    min-width: 220px;
    margin: 4px 0;
  }
`;
