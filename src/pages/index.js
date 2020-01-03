import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/sections/banner";
import TextMidia from "../components/sections/text-midia";
import Donwload from "../components/sections/donwload";

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />

        <Banner />

        <TextMidia
          id="functions"
          title="Descomplique pagamentos e otimize seus negócios"
          description="Emita cobranças por boleto bancário ou cartão de crédito de qualquer bandeira."
          image={{
            src: "sistema-2.png",
            order: "first",
            alt: ""
          }}
        />

        <TextMidia
          bgColor="primary_pastel"
          title="Reduza a inadimplência e lucre mais"
          description="Crie cobranças com juros e prazos específicos após vencimento."
          image={{
            src: "sistema-3.png",
            alt: ""
          }}
        />

        <TextMidia
          title="Vantagens e facilidades para seus clientes"
          description="Pagamentos parcelados em até 12 vezes no cartão de crédito ou parcelados em até 24 vezes no carnê e boleto bancário."
          image={{
            src: "sistema-2.png",
            order: "first",
            alt: ""
          }}
        />

        <Donwload id="donwload" />

      </Layout>
    )
  }
}

// export default IndexPage
