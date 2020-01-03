import React, { Component } from 'react';
import { Link } from "gatsby"

import Modal from "../../modal";

// Icons
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from '../../../images/Juno-Logotipo.svg'

import { Section, Nav, Brand, NavList, NavLink, Toggle, Collapse } from './styles';

function scrollFunction() {
  if (window.innerWidth > 1024) {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("navbar").style.height = "60px";
      document.getElementById("logo").style.width = "80px";
    } else {
      document.getElementById("navbar").style.height = "80px";
      document.getElementById("logo").style.width = "100px";
    }
  }
  else {
    document.getElementById("navbar").style.height = "60px";
    document.getElementById("logo").style.width = "80px";
  }
}
window.onscroll = () => scrollFunction();

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toogleMenu: false
    };
  }
  componentDidMount = () => {
    scrollFunction();

    document.addEventListener('scrollStart', this.handleCloseMenu, false);
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
                      <Link to="/#donwload">Baixar agora</Link>
                    </NavLink>
                    <NavLink>
                      <Modal />
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
