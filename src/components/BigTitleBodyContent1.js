import React, { useEffect, useState } from "react"
import "./scss/BigTitleBodyContent1.scss"
import { graphql, useStaticQuery } from "gatsby"
import Aos from "aos";
import "aos/dist/aos.css";

export default function BigTitleBodyContent1() {
  // const data = useStaticQuery(graphql`
  //   query BigTitleBodyContent1Query {
  //     allContentfulBodyTitleAndImage {
  //       edges {
  //         node {
  //           title
  //           image {
  //             file {
  //               url
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // useEffect(() => {
  //   Aos.init({duration: 1000});
  // }, []);

  return (
    <div className="BigTitleBodyContent1">
      <div className={'bigImageAboutUsBodyContainer'}>
        <img
          className={"bigImageAboutUsBody"}
          alt={``}
          key={``}
          // src={data.allContentfulBodyTitleAndImage.edges[1].node.image.file.url}
        />
      </div>

      
      <div className="textContainerBody1">
        <div className="textBodyAnimationContainer1">
            {/* <p className={'titleFront'}>{data.allContentfulBodyTitleAndImage.edges[1].node.title}</p> */}
            {/* <p className={'titleBack'}>{data.allContentfulBodyTitleAndImage.edges[1].node.title}</p> */}
        </div>
      </div>
    </div>
  )
}