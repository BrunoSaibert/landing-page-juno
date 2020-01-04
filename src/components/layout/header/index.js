import React, { Component } from 'react';
import { Link } from "gatsby"

import Button from "../../atoms/button";

// Icons
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from '../../../images/Juno-Logotipo.svg'

import { Section, Nav, Brand, NavList, NavLink, Toggle, Collapse } from './styles';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toogleMenu: false
    };
  }

  componentDidMount() {
    document.addEventListener('scrollStart', this.handleCloseMenu());
  }

  handleCloseMenu = () => {
    this.setState({ toogleMenu: false });
  };

  handleToogleMenu = () => {
    this.setState(prevState => ({ toogleMenu: !prevState.toogleMenu }));
  };

  render() {
    const { toogleMenu } = this.state;

    return (
      <Section id="top">
        <div className="container">
          <div className="row">
            <div className="col">

              <Nav id="navbar">
                <Brand>
                  <Link to="/#top">
                    <img src={Logo} alt="Logo" id="logo" />
                  </Link>
                </Brand>

                <Toggle onClick={this.handleToogleMenu}>
                  <FontAwesomeIcon icon={toogleMenu ? faTimes : faBars} />
                </Toggle>

                <Collapse className={toogleMenu ? "is-expanded" : ""}>
                  <NavList>
                    <NavLink>
                      <Link to="/#functions">Funcionalidades</Link>
                    </NavLink>
                    <NavLink>
                      <Link to="/#donwload">Baixe o app</Link>
                    </NavLink>
                    <NavLink>
                      <Button href="https://juno.com.br/" target="_blank">
                        Conheça a Juno
                      </Button>
                    </NavLink>
                  </NavList>
                </Collapse>

              </Nav>

            </div>
          </div>
        </div>
      </Section>
    );
  }
}
