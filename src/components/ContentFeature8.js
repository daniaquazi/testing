import React, { useEffect, useState } from "react"
import "./scss/ContentFeature8.scss"
import { graphql, useStaticQuery } from "gatsby"
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContentFeature8() {
  const data = useStaticQuery(graphql`
    query ContentFeature8Query {
      allContentfulFlexStyleBody {
        edges {
          node {
            image {
              file {
                url
              }
            }
            title
          }
        }
      }
    }
  `)

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className="contentFeature8">
      <div data-aos="fade-up" className="boardTextContainer8 fade-in">

        <div className={"displayBoardContainer8"}>
          <div className="displayBoard8"></div>
        </div>
      </div>

      <div className={'textContainer8'}>
          <p className={'title8'}>{data.allContentfulFlexStyleBody.edges[8].node.title}</p>
      </div>
      
      <div className={"imageContainer8"}>
        <img
          data-aos="fade-up"
          className={"bigImage"}
          alt={``}
          key={``}
          src={data.allContentfulFlexStyleBody.edges[8].node.image.file.url}
        />
      </div>
    </div>
    
  )
}
