import styled from 'styled-components';

export const Section = styled.div`
  background: ${props => props.bgColor && (props.theme.color[props.bgColor] || props.theme.grayScale[props.bgColor])};
  padding: 100px 0 0;

  #donwload-image {
    margin-top: 50px;
      
    @media (max-width: ${props => props.theme.breakpoints.sm}px) {
      margin-top: 16px;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.md}px) {
    padding: 50px 0 0;
  }
`;

export const Title = styled.p`
  margin-bottom: 30px;
  color: ${props => props.color ? (props.theme.color[props.color] || props.theme.grayScale[props.color]) : props.theme.color.primary};
`;

export const Description = styled.p`
  color: ${props => props.color ? (props.theme.color[props.color] || props.theme.grayScale[props.color]) : props.theme.grayScale.dark};
  margin-top: 20px;
`;

export const Separator = styled.hr`
  background: ${props => props.bgColor ? (props.theme.color[props.bgColor] || props.theme.grayScale[props.bgColor]) : props.theme.color.primary};
  height: 4px;
  width: 50px;
  border: 0;
`;