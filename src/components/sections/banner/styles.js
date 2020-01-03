import styled from 'styled-components';

export const Section = styled.div`
  background: ${props => props.theme.color.primary_pastel};
  color: ${props => props.theme.color.primary};
  min-height: 300px;
  padding: 100px 0;
  margin-top: 60px;
  background: ${props => props.theme.color.primary};
  overflow: hidden;

  #banner-image {
    @media (max-width: ${props => props.theme.breakpoints.sm}px) {
      margin-top: 20px;
      margin-bottom: -200px;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.md}px) {
    padding: 50px 0;
  }
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  color: ${props => props.theme.grayScale.light};
  position: relative;

  &::after {
    content: '';
    background: ${props => props.theme.grayScale.light};
    height: 2px;
    width: 200px;
    display: block;
    margin-top: 30px;
  }
`;

export const Description = styled.p`
  color: ${props => props.theme.grayScale.dark};
  font-size: ${props => props.theme.fontSizes.md[0]};
  line-height: calc(${props => props.theme.fontSizes.md[0]} + 5px);
  color: ${props => props.theme.grayScale.light};
  margin-bottom: 30px;
`;