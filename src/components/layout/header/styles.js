import styled from 'styled-components';

export const Section = styled.section`
  background: ${props => props.theme.color.primary};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  transition: 0.4s;
`;

export const Brand = styled.a`
  img{
    width: 100px;
    transition: 0.4s;
  }
`;

export const NavList = styled.ul`
  margin: 0;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled.li`
  list-style: none;
  margin: 0 4px;
  
  a{
    height: 40px;
    display: flex;
    align-items: center;
    padding: 8px 24px;
    color: ${props => props.theme.grayScale.light};
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    border-radius: 2px;
    transition: all 0.4s;

    :hover{
      background: ${props => props.theme.color.primary_light};
      color: ${props => props.theme.grayScale.light};
      text-decoration: none;
      opacity: 1;
    }
  }
`;
