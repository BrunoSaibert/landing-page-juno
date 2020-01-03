import styled from 'styled-components';

export const Container = styled.footer`
  padding: 20px 0;
  color: ${props => props.theme.grayScale.light};
  /* background: ${props => props.theme.grayScale.dark_90}; */
  /* background: ${props => props.theme.color.primary_dark}; */
  background: ${props => props.theme.color.primary};
  border-top: 1px solid ${props => props.theme.grayScale.gray};
  
  p {
    font-size: ${props => props.theme.fontSizes.xs[0]};
    line-height: calc(${props => props.theme.fontSizes.xs[0]} + 5px);
    margin: 5px 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}px) {
    text-align: center;
    padding: 50px 0;
  }

  #contact {
    margin-bottom: 30px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}px) {
    #contact {
      margin-bottom: 20px;
    }
  }

  #social{
    margin: 20px 0;

    display: flex;
    align-items: center;
    flex-direction: row;

    ul{
      margin: 0 0 0 32px;
      display: flex;

      li{
        list-style: none;
        margin: 0 4px;
      
        a{
          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid ${props => props.theme.grayScale.light};
          color: ${props => props.theme.grayScale.light};
          text-decoration: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
        }
      }
    }
    
    @media (max-width: ${props => props.theme.breakpoints.sm}px) {
      flex-direction: column;
      margin: 20px 0 0;

      ul {
        margin: 10px 0 0;
      }
    }
  }
`;