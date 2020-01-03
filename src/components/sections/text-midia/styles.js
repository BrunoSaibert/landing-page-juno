import styled from 'styled-components';

export const Section = styled.div`
  background: ${props => props.bgColor && (props.theme.color[props.bgColor] || props.theme.grayScale[props.bgColor])};
  min-height: 300px;
  padding: 100px 0 0;

  @media (max-width: ${props => props.theme.breakpoints.md}px) {
    padding: 50px 0 0;
  }
`;

export const Title = styled.p`
  margin-bottom: 30px;
  color: ${props => props.color ?
    (props.theme.color[props.color] || props.theme.grayScale[props.color])
    : props.theme.color.primary};
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    background: ${props => props.theme.color.atencion};
    top: 0px;
    left: -20px;
    height: 44px;
    width: 44px;
    border-radius: 50%;
    z-index: -1;

    @media (max-width: ${props => props.theme.breakpoints.sm}px) {
      top: -5px;
      left: -10px;
    }
  }
`;

export const Description = styled.p`
  color: ${props => props.color ?
    (props.theme.color[props.color] || props.theme.grayScale[props.color])
    : props.theme.grayScale.dark};
  margin-top: 20px;
`;

export const Separator = styled.hr`
  background: ${props => props.bgColor ?
    (props.theme.color[props.bgColor] || props.theme.grayScale[props.bgColor])
    : props.theme.color.primary};
  height: 4px;
  width: 50px;
  border: 0;
`;