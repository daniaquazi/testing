import React, { useEffect, useState } from "react"
import "./scss/ContentFeature5.scss"
import { graphql, useStaticQuery } from "gatsby"
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContentFeature5() {
  const data = useStaticQuery(graphql`
    query ContentFeature5Query {
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
    <div className="contentFeature5">
      <div className={'imageContainer5'}>
        <img
          className={"bigImage5"}
          alt={``}
          key={``}
          src={data.allContentfulFlexStyleBody.edges[1].node.image.file.url}
        />
      </div>

      <div className="boardTextContainer5">
        <div className="boardTextAnimationContainer5">
          <div className={'textContainer5'}>
            <p className={'categoryName5'}>{data.allContentfulFlexStyleBody.edges[1].node.category}</p>
            <p className={'title5'}>{data.allContentfulFlexStyleBody.edges[1].node.title}</p>
            {/* <p className={'subTitle3'}>{data.allContentfulFlexStyleBody.edges[1].node.subTitle}</p> */}
            <p className={'bodyText5'}>{data.allContentfulFlexStyleBody.edges[1].node.bodyText.bodyText}</p>
            <p className={'callToAction5'}>{data.allContentfulFlexStyleBody.edges[1].node.callToAction}</p>
          </div>
        </div>
      </div>
    </div>
  )
}