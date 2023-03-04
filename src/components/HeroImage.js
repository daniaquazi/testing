import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import "./scss/HeroImage.scss"

export default function HeroImage() {
    const data = useStaticQuery(graphql`
        query HeroImageQuery {
            allContentfulHeroImage {
                edges {
                    node {
                        heroImage {
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
        <div className="heroImageContainer">
            <img
              className={"heroImage"}
              alt={``}
              key={``} 
              src={data.allContentfulHeroImage.edges[0].node.heroImage.file.url}
            />
        </div>
    )
}
