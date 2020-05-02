import React from "react"
import { Link } from "gatsby"
import { Button } from "rebass"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Write a landing page</p>
    <Button bg="highlight" onClick={console.log}>Get started</Button>
  </Layout>
)

export default IndexPage
