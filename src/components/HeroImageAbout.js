import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import "./scss/HeroImageAbout.scss"

export default function HeroImageAbout() {
    const data = useStaticQuery(graphql`
        query HeroImageAboutQuery {
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
              src={data.allContentfulHeroImage.edges[1].node.heroImage.file.url}
            />
        </div>
    )
}
