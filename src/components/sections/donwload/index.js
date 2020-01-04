import React from 'react';

import { ButtonGroup, ButtonApp } from "../../atoms/button";
import Image from "../../atoms/image";

// Icons
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Section, Title, Description, Separator } from './styles';

export default function Donwload() {
  return (
    <Section id="donwload" bgColor="primary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-8 col-lg-6 offset-lg-1 order-2">
            <Title as="h2" color="light">Ficou interessado?</Title>
            <Separator bgColor="light" />
            <Description
              color="light"
              dangerouslySetInnerHTML={{ __html: "Abra uma conta Juno rapidinho com o seu CPF ou CNPJ e comece a emitir cobranças hoje mesmo!" }} />

            <ButtonGroup>
              <ButtonApp>
                <FontAwesomeIcon icon={faGooglePlay} />
                <span>Baixe na <big>Goggle Play</big></span>
              </ButtonApp>

              <ButtonApp>
                <FontAwesomeIcon icon={faApple} />
                <span>Baixe na <big>App Store</big></span>
              </ButtonApp>
            </ButtonGroup>
          </div>

          <div id="donwload-image" className="col-8 offset-2 col-sm-4 offset-sm-4 col-md-4 offset-md-0 col-lg-3 offset-lg-1 order-last order-lg-last">
            <Image filename="sistema-1-min.png" alt="Baixe o App" />
          </div>
        </div>
      </div>
    </Section>
  );
}
