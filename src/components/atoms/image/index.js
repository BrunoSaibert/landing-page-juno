import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { ImageWrapper } from './styles'

export default function Image({ filename, alt }) {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: {absolutePath: {}}) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(filename)
  })

  return (
    <>
      {image &&
        (
          <ImageWrapper
            fluid={image.node.childImageSharp.fluid}
            alt={alt}
          />

        )}
    </>
  )
}