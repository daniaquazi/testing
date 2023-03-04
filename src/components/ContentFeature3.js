import React, { useEffect, useState } from "react"
import "./scss/ContentFeature3.scss"
import { graphql, useStaticQuery } from "gatsby"
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContentFeature3() {
  const data = useStaticQuery(graphql`
    query ContentFeature2Query {
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
    <div className="contentFeature3">
      <div className={'imageContainer3'}>
        <img
          data-aos="fade-up"
          className={"bigImage3"}
          alt={``}
          key={``}
//           src={data.allContentfulFlexStyleBody.edges[3].node.image.file.url}
        />
      </div>

      
      <div className="boardTextContainer3">
        <div data-aos="fade-up" className="boardTextAnimationContainer3">
          <div className={"displayBoardContainer3"}>
            <div className={"displayBoard3"}></div>
          </div>

          <div className={'textContainer3'}>
            <p className={'title3'}>{data.allContentfulFlexStyleBody.edges[3].node.title}</p>
            <p className={'categoryName3'}>{data.allContentfulFlexStyleBody.edges[3].node.category}</p>
            <p className={'subTitle3'}>{data.allContentfulFlexStyleBody.edges[3].node.subTitle}</p>
            <p className={'bodyText3'}>{data.allContentfulFlexStyleBody.edges[3].node.bodyText.bodyText}</p>
            <p className={'callToAction3'}>{data.allContentfulFlexStyleBody.edges[3].node.callToAction}</p>
          </div>
        </div>
      </div>

      <div className={"displayBarContainer3"}>
        <div data-aos="fade-up" className={"displayBar3"}></div>
      </div>

    </div>
  )
}
