import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kelly-profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  if (!data?.file?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <>
      <Img
        fluid={data.file.childImageSharp.fluid}
        placeholderStyle={{ visibility: "hidden" }}
        alt="Profile picture"
      />
    </>
  )
}

export default Image
