import React from "react"

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      Designed & Developed by Kelly Ren
      <br />© {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer
