import React, { useState } from 'react';

import { motion } from "framer-motion";

import { Form, FormGroup, Input } from "../atoms/form";
import Button from "../atoms/button";

import { ModalContainer, Dialog, Content, Header, Body, Footer, Close } from './styles';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    hidden: { opacity: 0, scale: 0.5, },
    visible: { opacity: 1, scale: 1, },
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Quero ser avisado</Button>

      {isOpen &&
        <ModalContainer tabindex="-1">
          <Dialog>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ ease: "easeOut" }}
              variants={variants}
            >
              <Content>
                <Form
                  name="contact-form"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <Header>
                    <h5 class="modal-title">Cadastro de lista de espera</h5>
                    <Close onClick={() => setIsOpen(false)}>&times;</Close>
                  </Header>
                  <Body>
                    <p>Nos informe seu dados de contato para confirmar o seu interesse no App Juno.</p>
                    <p>Assim que o aplicativo for disponibilizado, você será notificado.</p>
                    <FormGroup>
                      <Input type="text" id="name" name="input-name" placeholder="Qual é o seu Nome?" />
                    </FormGroup>
                    <FormGroup>
                      <Input type="email" id="email" name="input-email" placeholder="Informe seu melhor E-mail" />
                    </FormGroup>
                  </Body>
                  <Footer>
                    <Button type="submit">Salvar</Button>
                  </Footer>
                </Form>
              </Content>
            </motion.div>
          </Dialog>
        </ModalContainer>
      }
    </>
  );
}
