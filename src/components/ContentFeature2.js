import React, { useEffect, useState } from "react"
import "./scss/ContentFeature2.scss"
import { graphql, useStaticQuery } from "gatsby"
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContentFeature2() {
  const data = useStaticQuery(graphql`
    query ContentFeature1Query {
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
    <div className="contentFeature2">
      <div className="imageContainer2">
        <img
          data-aos="fade-right"
          className={"bigImage2"}
          alt={``}
          key={``}
          src={data.allContentfulFlexStyleBody.edges[4].node.image.file.url}
        />
      </div>

      <div className={'textContainer2'}>
        <p data-aos="fade-left" className={'categoryName2'}>{data.allContentfulFlexStyleBody.edges[4].node.category}</p>
        <p data-aos="fade-left" className={'title2'}>{data.allContentfulFlexStyleBody.edges[4].node.title}</p>
        <p data-aos="fade-left" className={'subTitle2'}>{data.allContentfulFlexStyleBody.edges[4].node.subTitle}</p>
        <p data-aos="fade-left" className={'bodyText2'}>{data.allContentfulFlexStyleBody.edges[4].node.bodyText.bodyText}</p>
        <p data-aos="fade-left" className={'callToAction2'}>{data.allContentfulFlexStyleBody.edges[4].node.callToAction}</p>
      </div>
    </div>
  )
}