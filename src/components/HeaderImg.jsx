import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderImg = ({alt}) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kelly-icon.png" }) {
        childImageSharp {
          fixed(width: 30, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  if (!data?.file?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      placeholderStyle={{ visibility: "hidden" }}
      alt={alt}
    />
  )
}

export default HeaderImg
