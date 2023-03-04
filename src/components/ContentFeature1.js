import React, { useEffect, useState } from "react"
import "./scss/ContentFeature1.scss"
import { graphql, useStaticQuery } from "gatsby"
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContentFeature1() {
  const data = useStaticQuery(graphql`
    query ContentFeature3Query {
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
    <div className="contentFeature1">
      <div data-aos="fade-up" className="boardTextContainer1 fade-in">
        <div className={'textContainer1'}>
          <p className={'subTitle1'}>{data.allContentfulFlexStyleBody.edges[2].node.subTitle}</p>
          <p className={'title1'}>{data.allContentfulFlexStyleBody.edges[2].node.title}</p>
          <p className={'categoryName1'}>{data.allContentfulFlexStyleBody.edges[2].node.category}</p>
          <p className={'bodyText1'}>{data.allContentfulFlexStyleBody.edges[2].node.bodyText.bodyText}</p>
          <p className={'callToAction1'}>{data.allContentfulFlexStyleBody.edges[2].node.callToAction}</p>
        </div>
        <div className={"displayBoardContainer1"}>
          <div className="displayBoard1">

          </div>
        </div>
      </div>
      

      <div className={"displayBarContainer1"}>
        <div data-aos="fade-up" className="displayBar1" />
      </div>
      <div className={"imageContainer1"}>
        <img
          data-aos="fade-up"
          className={"bigImage"}
          alt={``}
          key={``}
          src={data.allContentfulFlexStyleBody.edges[2].node.image.file.url}
        />
        
      </div>
    </div>
  )
}
