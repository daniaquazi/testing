import React, { useEffect, useState } from "react"
import "./scss/ContentFeature62.scss"
import { graphql, useStaticQuery } from "gatsby"
import Aos from "aos";
import "aos/dist/aos.css";

// [6] is TASTE
// [5] is Our Values, Mission, Purpose
// [7] is 

export default function ContentFeature62() {
  const data = useStaticQuery(graphql`
    query ContentFeature62Query {
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
    <div className="contentFeature62">
      {/* <div className="imageContainer2">
        <img
          data-aos="fade-right"
          className={"bigImage2"}
          alt={``}
          key={``}
          src={data.allContentfulFlexStyleBody.edges[4].node.image.file.url}
        />
      </div> */}

      <div className={'textContainer62'}>
        <p  className={'title62'}>{data.allContentfulFlexStyleBody.edges[6].node.title}</p>
        <p className='body62'> The Fresh Kid is a tastemaker.</p>
        <p className='body62'> His love and mastery is in understanding how culture and commerce affect one another.</p>
        <p className='body62'> A contrarian outsider raised between Nigeria and the United Kingdom.</p>
        <p className='body62'> Educated in Englands oldest educational institutions his taste and belief system is formed by his international background.</p>
        <p className='body62'> As a skateboarder, OG collector of pop art, vinyl toys and sneaker-head he takes his pulse from street culture.</p>
        <p className='body62'> His tastes are formed by the old and the new.</p>
        <p className='body62'> As a former elite rugby plater with international honours his beliefs and values are derived from sport and his heritage background.</p>
      </div>
    </div>
  )
}
