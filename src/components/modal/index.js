import React, { useState } from 'react';

import { Form, FormGroup, Input } from "../atoms/form";
import Button from "../atoms/button";

import { ModalContainer, Dialog, Content, Header, Body, Footer, Close } from './styles';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Quero ser avisado</Button>

      {isOpen &&
        <ModalContainer tabindex="-1">
          <Dialog>
            <Content>
              <Header>
                <h5 class="modal-title">Cadastro de lista de espera</h5>
                <Close onClick={() => setIsOpen(false)}>&times;</Close>
              </Header>
              <Body>
                <p>Nos informe seu dados de contato para confirmar o seu interesse no App Juno.</p>
                <p>Assim que o aplicativo for disponibilizado, você será notificado.</p>
                <Form>
                  <FormGroup>
                    <Input type="text" id="name" placeholder="Qual é o seu Nome?" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="email" id="email" placeholder="Informe seu melhor E-mail" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" id="fone" placeholder="Qual é seu Telefone?" />
                  </FormGroup>
                </Form>
              </Body>
              <Footer>
                <Button>Salvar</Button>
              </Footer>
            </Content>
          </Dialog>
        </ModalContainer>
      }
    </>
  );
}
