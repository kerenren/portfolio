import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/Layout.jsx"
import SEO from "../components/seo"
import Hero from "../components/Hero.jsx"
import About from "../components/About.jsx"
import Contact from "../components/Contact.jsx"
import Projects from "../components/Projects.jsx"
import "../styles/custom.css"

import { PortfolioProvider } from "../library/context"
import { projectsData } from "../library/data"

const IndexPage = () => {
  const [projects, setProjects] = useState([''])

  useEffect(() => {
    setProjects([...projectsData])
  }, [])

  return (
    <PortfolioProvider value={{ projects }}>
      <Hero />
      <Layout>
        <SEO title="Home" />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </PortfolioProvider>
  )
}

export default IndexPage
