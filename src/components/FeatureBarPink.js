import React, { useState } from "react"
import "./scss/FeatureBarPink.scss"
import { graphql, useStaticQuery } from "gatsby"

export default function FeatureBarPink() {
  const data = useStaticQuery(graphql`
    query LogoQueryPink {
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
      <nav className="featureBarPink">
        <div className="text">
            Tech - Data & Ecommerce - Always Fun
        </div>
        {/* <div className="MarqueBoxPink">
          {data.allContentfulMarqueLogo.edges.map(({ node }, index) => (
            <img
              className={"MarqueLogoPink"}
              alt={``}
              key={``}
              src={node.marqueLogoFile.file.url}
            />
          ))}
        </div> */}
      </nav>
    </div>
  )
  
}