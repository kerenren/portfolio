import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout.jsx"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      Hello!{" "}
      <span role="img" alt="waving hand emoji">
        {" "}
        👋{" "}
      </span>
    </h1>
    <p>My name is Kelly Ren </p>
    <p>
      I am a Web Developer with passion on building user friendly web site{" "}
      <span role="img" alt="a developer emoji">
        {" "}
        👩🏻‍💻{" "}
      </span>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
