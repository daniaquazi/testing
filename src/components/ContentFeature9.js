// Our Values, Mission, Purpose & Principles

import React, { useEffect, useState } from "react"
import "./scss/ContentFeature9.scss"
import { graphql, useStaticQuery } from "gatsby"
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContentFeature9() {
  const data = useStaticQuery(graphql`
    query ContentFeature9Query {
      allContentfulFlexStyleBody {
        edges {
          node {
            image {
              file {
                url
              }
            }
            title
            subTitle
            category
            callToAction
            bodyText {
              bodyText
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className="contentFeature9">
      <div data-aos="fade-up" className="boardTextContainer9 fade-in">
        <div className={'textContainer9'}>
          <p className={'subTitle9'}>{data.allContentfulFlexStyleBody.edges[5].node.subTitle}</p>
          <p className={'title9'}>{data.allContentfulFlexStyleBody.edges[5].node.title}</p>
          <p className={'categoryName9'}>{data.allContentfulFlexStyleBody.edges[5].node.category}</p>
          <p className={'bodyText9'}>{data.allContentfulFlexStyleBody.edges[5].node.bodyText.bodyText}</p>
          <p className={'callToAction9'}>{data.allContentfulFlexStyleBody.edges[5].node.callToAction}</p>
        </div>
        <div className={"displayBoardContainer9"}>
          <div className="displayBoard9">

          </div>
        </div>
      </div>
      

      <div className={"displayBarContainer9"}>
        <div data-aos="fade-up" className="displayBar9" />
      </div>
      <div className={"imageContainer9"}>
        <img
          data-aos="fade-up"
          className={"bigImage"}
          alt={``}
          key={``}
          src={data.allContentfulFlexStyleBody.edges[5].node.image.file.url}
        />
      </div>
    </div>
  )
}
