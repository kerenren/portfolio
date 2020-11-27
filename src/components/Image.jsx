import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kelly-profile.png" }) {
        childImageSharp {
          fixed(width: 260, quality: 100) {
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
      alt="Profile picture"
      style={{borderRadius:"50%"}}
    />
  )
}

export default Image
