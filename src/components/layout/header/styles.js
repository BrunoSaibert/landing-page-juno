import styled from 'styled-components';

export const Section = styled.section`
  background: ${props => props.theme.color.primary};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;

  @media (max-width: ${props => props.theme.breakpoints.md}px) {
    box-shadow: 0 2px 8px ${props => props.theme.color.primary};

    .container {
      max-width: 100%;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  transition: 0.4s;

  @media (max-width: ${props => props.theme.breakpoints.md}px) {
    height: 60px;
  }
`;

export const Brand = styled.div`
  flex: 1;

  img {
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
  
  :not(.btn){
    a {
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
      text-decoration: none;

      :hover{
        background: ${props => props.theme.color.primary_light};
        color: ${props => props.theme.grayScale.light};
        text-decoration: none;
        opacity: 1;
      }
    }
  }
`;


export const Toggle = styled.button`
  display: none;

  @media (max-width: ${props => props.theme.breakpoints.md}px) {
    display: flex;
    height: 60px;
    margin: 0;
    background: ${props => props.theme.color.primary};
    color: ${props => props.theme.grayScale.light};
    border: 0;
    width: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    font-size: ${props => props.theme.fontSizes.md[1]};
  }
`;

export const Collapse = styled.div`
  display: block;

  .navbar-menu-responsive-links {
    display: none;

    svg {
      margin-right: 10px;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.md}px) {
    background: ${props => props.theme.grayScale.light};
    width: 100vw;

    position: absolute;
    left: 0;
    right: 0;
    top: 60px;

    overflow: hidden;
    max-height: 0;
    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

    &.is-expanded {
      opacity: 1;
      overflow: hidden;
      max-height: calc(100vh - 60px);
      transition-duration: 0.4s;
      transition-timing-function: ease-in;
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 12px 24px;

        li {
        padding: 0;
        margin: 5px 0px;
        width: 100%;
        color: ${props => props.theme.color.primary_pastel};
        background: ${props => props.theme.color.primary};
        /* border-radius: 10px; */
        height: auto;

        .btn {
          width: 100%;
        }

        a {
          justify-content: center;
          padding: 0;
          margin: 0;
        }
      }
    }
  }
`;