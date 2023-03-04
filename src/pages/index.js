import * as React from "react"
// import "./index.css"

import ValueProposition from "../components/ValueProposition"

import ContentFeature2 from "../components/ContentFeature2"
import ContentFeature3 from "../components/ContentFeature3"
import ContentFeature1 from "../components/ContentFeature1"
import Quote1 from "../components/Quote1"
import HeroImage from "../components/HeroImage"
import Layout from "../components/Layout"

function IndexPage({ data }) {
  return (
    <Layout>
      <HeroImage />
      <ValueProposition />
      <ContentFeature1 />
      <ContentFeature2 />
      {/* <Quote1 /> */}
      <ContentFeature3 />
    </Layout>
  )
}

export default IndexPage