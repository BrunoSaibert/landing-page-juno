import React from "react";

import { motion } from "framer-motion";

import Image from "../../atoms/image";

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
          </div>
          <div id="banner-image" className="col-8 offset-2 col-sm-4 offset-sm-4 col-md-4 offset-md-0 col-lg-3 offset-lg-0">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut"
              }}
            >
              <Image filename="iphone-x-min.png" alt="Novo App" />
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
