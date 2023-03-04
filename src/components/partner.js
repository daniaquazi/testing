import React, { useState } from "react"
import "./scss/partner.scss"
import { graphql, useStaticQuery } from "gatsby"
import econsultancy from './Econsultancy_logo.png';
import institute from './Institute-of-Data-Marketing.png';
import bigcommerce from './BigCommerce_logo.png';

export default function PartnerLogo() {
  const data = useStaticQuery(graphql`
    query PartnerQuery {
      allContentfulFooter {
        edges {
          node {
            partnerLogos {
              bigCommerceLogo {
                file {
                  url
                }
              }
              eConsultancyLogo {
                file {
                  url
                }
              }
              idmLogo {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
        <div className="footerPartnerLogos">
            {/* <img
                className={"footerEConsultancyLogo"}
                alt={``}
                key={``}
                src={data.allContentfulFooter.edges[0].node.partnerLogos.eConsultancyLogo.file.url}
                />
                <img
                className={"footerIDMLogo"}
                alt={``}
                key={``}
                src={data.allContentfulFooter.edges[0].node.partnerLogos.idmLogo.file.url}
                />
                <img
                className={"footerBigCommerceLogo"}
                alt={``}
                key={``}
                src={data.allContentfulFooter.edges[0].node.partnerLogos.bigCommerceLogo.file.url}
                /> */}

        <div className="footerPartnerLogosRow2">
            <img
            class={"footerEConsultancyLogo"}
            src={econsultancy} alt="Logo"
            />
            <img
            className={"footerIDMLogo"}
            src={institute} alt="Logo"
            />
            <img
            className={"footerBigCommerceLogo"}
            src={bigcommerce} alt="Logo"
            />
        </div>
        </div>
  )
}