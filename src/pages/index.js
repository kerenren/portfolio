import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/Layout.jsx"
import Image from "../components/Image.jsx"
import SEO from "../components/seo"
import Hero from "../components/Hero.jsx"
import About from "../components/About.jsx"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
