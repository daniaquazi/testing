import React, { useState } from "react"
import "./scss/FeatureBar.scss"
import { graphql, useStaticQuery } from "gatsby"

export default function FeatureBar() {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      allContentfulMarqueLogo {
        edges {
          node {
            marqueLogoFile {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <nav className="featureBar">
        <div className="MarqueBox">
          {data.allContentfulMarqueLogo.edges.map(({ node }, index) => (
            <img
              className={"MarqueLogo"}
              alt={``}
              key={``}
              src={node.marqueLogoFile.file.url}
            />
          ))}
        </div>
      </nav>
    </div>
  )
  
}