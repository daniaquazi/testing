import React, { useEffect, useState } from "react"
import "./scss/ContentFeature7.scss"
import { graphql, useStaticQuery } from "gatsby"
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContentFeature7() {
  const data = useStaticQuery(graphql`
    query ContentFeature7Query {
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
    <div className="contentFeature7">
      <div data-aos="fade-up" className="boardTextContainer7 fade-in">
        <div className={'textContainer7'}>
          {/* <p className={'subTitle1'}>{data.allContentfulFlexStyleBody.edges[6].node.subTitle}</p> */}
          <p className={'title7'}>{data.allContentfulFlexStyleBody.edges[7].node.title}</p>
          {/* <p className={'categoryName1'}>{data.allContentfulFlexStyleBody.edges[6].node.category}</p>
          <p className={'bodyText1'}>{data.allContentfulFlexStyleBody.edges[6].node.bodyText.bodyText}</p>
          <p className={'callToAction1'}>{data.allContentfulFlexStyleBody.edges[6].node.callToAction}</p> */}
        </div>
        {/* <div className={"displayBoardContainer7"}>
          <div className="displayBoard7">

          </div>
        </div> */}
      </div>
      

      <div className={"displayBarContainer7"}>
        
        <div data-aos="fade-up" className="displayBar7" />
      </div>
      <div className={"imageContainer7"}>
        <img
          data-aos="fade-up"
          className={"bigImage"}
          alt={``}
          key={``}
          src={data.allContentfulFlexStyleBody.edges[7].node.image.file.url}
        />
      </div>
    </div>
  )
}
