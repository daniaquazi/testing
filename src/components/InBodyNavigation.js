import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import "./scss/InBodyNavigation.scss"


export default function InBodyNavigation() {
    const data = useStaticQuery(graphql`
    query InBodyNavigationQuery {
        allContentfulBodyNavigation {
          edges {
            node {
              image {
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
        <div className="inBodyNavigation">
            <div className="inBodyNavigationLinks">
                <ul>
                    <li><a>Fair</a></li>
                    <li><a>Indigenous</a></li>
                    <li><a>Vegan</a></li>
                    <li><a>Organic</a></li>
                    <li><a>Refashioned</a></li>
                    <li><a>Regenerative</a></li>
                </ul>
            </div>
            <div className="navImageContainer">
              <img
                className={"navImage"}
                alt={``}
                key={``} 
                src={data.allContentfulBodyNavigation.edges[0].node.image.file.url}
              />
            </div>
        </div>
    )
}