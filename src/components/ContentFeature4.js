import React, { useEffect, useState } from "react"
import "./scss/ContentFeature4.scss"
import { graphql, useStaticQuery } from "gatsby"
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContentFeature4() {
  const data = useStaticQuery(graphql`
    query ContentFeature4Query {
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
    <div className="contentFeature4">
      <div className={'imageContainer4'}>
        <img
          className={"bigImage4"}
          alt={``}
          key={``}
          src={data.allContentfulFlexStyleBody.edges[0].node.image.file.url}
        />
      </div>

      
      <div className="boardTextContainer4">
        <div className="boardTextAnimationContainer4">
          <div className={"displayBoardContainer4"}>
            <div className={"displayBoard4"}></div>
          </div>
          <div className={'textContainer4'}>
            <p className={'categoryName4'}>{data.allContentfulFlexStyleBody.edges[0].node.category}</p>
            <p className={'title4'}>{data.allContentfulFlexStyleBody.edges[0].node.title}</p>
            <p className={'subTitle4'}>{data.allContentfulFlexStyleBody.edges[0].node.subTitle}</p>
            <p className={'bodyText4'}>{data.allContentfulFlexStyleBody.edges[0].node.bodyText.bodyText}</p>
            <p className={'callToAction4'}>{data.allContentfulFlexStyleBody.edges[0].node.callToAction}</p>
          </div>
        </div>
      </div>
    </div>
  )
}