import React from "react";

import Image from "../../atoms/image";
import Modal from "../../modal";

import { Section, Title, Description } from './styles';

export default function Banner() {
  return (
    <Section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-8 col-lg-9">
            <Title>
              App Juno, a solução completa para pagamentos agora na sua mão
            </Title>

            <Description>
              A Juno é pra todo mundo: MEIs, e-commerces, marketplaces, empresas de qualquer tamanho e também para pessoas físicas.
            </Description>

            <Modal />
          </div>
          <div id="banner-image" className="col-8 offset-2 col-sm-4 offset-sm-4 col-md-4 offset-md-0 col-lg-3 offset-lg-0">
            <Image filename="iphone-x.png" alt="Novo App" />
          </div>
        </div>
      </div>
    </Section>
  );
}
