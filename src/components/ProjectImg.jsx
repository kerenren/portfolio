import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const ProjectImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 1366) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === filename
      )

      if (!image) return null

      const imageFluid = image.node.fluid
      return <Img alt={alt} fluid={imageFluid} />
    }}
  />
)

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
}

export default ProjectImg
