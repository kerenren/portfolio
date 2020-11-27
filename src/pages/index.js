import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/Layout.jsx"
import SEO from "../components/seo"
import Hero from "../components/Hero.jsx"
import About from "../components/About.jsx"
import Contact from "../components/Contact.jsx"
import "../styles/custom.css"

const IndexPage = () => (
  <>
    <Hero />
    <Layout>
      <SEO title="Home" />
      <About />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
