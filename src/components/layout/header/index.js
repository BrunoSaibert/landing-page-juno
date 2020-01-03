import React from 'react';
import { Link } from "gatsby"

import Modal from "../../modal";

import Logo from '../../../images/Juno-Logotipo.svg'

import { Section, Nav, Brand, NavList, NavLink } from './styles';

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.height = "60px";
    document.getElementById("logo").style.width = "80px";
  } else {
    document.getElementById("navbar").style.height = "80px";
    document.getElementById("logo").style.width = "100px";
  }
}

export default function Header() {
  // window.onscroll = () => scrollFunction();

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

            </Nav>

          </div>
        </div>
      </div>
    </Section>
  );
}
