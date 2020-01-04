import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TextMidia from "../components/sections/text-midia";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <TextMidia
      title="Página não encontrada"
      description="A página solicitada não existe."
      image={{
        src: "sistema-1-min.png",
        alt: ""
      }}
    />
  </Layout>
)

export default NotFoundPage
