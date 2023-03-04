import * as React from "react"

import ValueProposition from "../components/ValueProposition"

import HeroImage from "../components/HeroImage"
import ContentFeature5 from "../components/ContentFeature5"
import ContentFeature4 from "../components/ContentFeature4"
import BigTitleBodyContent1 from "../components/BigTitleBodyContent1"
import InBodyNavigation from "../components/InBodyNavigation"
import Layout from "../components/Layout"
import Quote2 from "../components/Quote2"
import TheTeam from "../components/TheTeam"
import HeroImageAbout from "../components/HeroImageAbout"
import PartnerLogo from "../components/partner"
import ContentFeature61 from "../components/ContentFeature61"
import ContentFeature62 from "../components/ContentFeature62"
import ContentFeature63 from "../components/ContentFeature63"
import Quote3 from "../components/Quote3"
import ContentFeature7 from "../components/ContentFeature7"
import ContentFeature8 from "../components/ContentFeature8"
import ContentFeature9 from "../components/ContentFeature9"

function aboutUsPage({ data }) {
  
  return (
        <Layout>
          <HeroImageAbout />
          {/* <TheTeam /> */}
          {/* <ValueProposition /> */}
          <PartnerLogo />
          <ContentFeature61 />
          <Quote3 />
          <p> .</p>
          <p> .</p>
          <ContentFeature7 />
          <ContentFeature62 />
          <p> .</p>
          <p> .</p>
          {/* <ContentFeature6 /> */}
          <ContentFeature8 />
          <ContentFeature63 />
          <ContentFeature9 />
          <p> .</p>
          <p> .</p>
          <p> .</p>
          {/* <ContentFeature4 /> */}
          {/* <InBodyNavigation /> */}
          {/* <Quote2 />
          <ContentFeature5 /> */}
        </Layout>
  )
  
}

export default aboutUsPage