import React from 'react';

// Icons
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <div className="container">
        <div className="row align-items-center">
          <div id="contact" className="col-12 col-lg-10 offset-lg-1">
            <p>Contato Juno - segunda a sexta-feira, das 9h às 18h - (41) 3013-9650 - falecom@juno.com.br</p>
            <p>Ouvidoria Juno - segunda a sexta-feira, das 9:30h às 11:30h e das 13:30h às 17:30h - (41) 3027-9600 - ouvidoria@juno.com.br</p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 offset-lg-1">
            <p>2019 © Juno. Todos os direitos reservados.</p>
            <p>CNPJ 21.018.182/0001-06</p>
            <p>Juno é uma plataforma de BoletoBancário.com</p>
          </div>
          <div id="social" className="col-12 col-md-6 col-lg-4">
            <span>#tamo<strong>juno</strong></span>

            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
