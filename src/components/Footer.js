import React, { useState } from "react"
import "./scss/Footer.scss"
import { graphql, useStaticQuery } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allContentfulFooter {
        edges {
          node {
            valueProposition1
            valueProposition2
            valueProposition3
            companyLogo {
              file {
                url
              }
            }
            additionalImage {
              file {
                url
              }
            }
            displayBoard {
              file {
                url
              }
            }
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
            socialIcons {
              facebookIcon {
                file {
                  url
                }
              }
              linkedInIcon {
                file {
                  url
                }
              }
              twitterIcon {
                file {
                  url
                }
              }
              youtubeIcon {
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
      <footer className="footer">
        <div className="footerHeader">
            <div className="footerHeaderProposition">
              <ul>
                <li>
                  <a>
                    <h2>
                      {data.allContentfulFooter.edges[0].node.valueProposition1}
                    </h2>
                  </a>
                </li>
                <li>
                  <a>
                    <h2>
                      {data.allContentfulFooter.edges[0].node.valueProposition2}
                    </h2>
                  </a>
                </li>
                <li>
                  <a>
                    <h2>
                      {data.allContentfulFooter.edges[0].node.valueProposition3}
                    </h2>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        <div className="footerMain">
          <div className="footerMainBody">
            <div className="footerMainBodyLogos">
              <div className="footerCompanyLogo">
                <img
                className={"footerCompanyLogoMarque"}
                alt={``}
                key={``}
                src={data.allContentfulFooter.edges[0].node.companyLogo.file.url}
                />
              </div>
              <div className="footerCompanyLogoText">
                  <p className="footerTextLeft">Our technology partnership and certifications</p>
                </div>
              <div className="footerPartnerLogos">
                <div className="footerPartnerLogosRow1">
                  <img
                    className={"footerBigCommerceLogo"}
                    alt={``}
                    key={``}
                    src={data.allContentfulFooter.edges[0].node.partnerLogos.bigCommerceLogo.file.url}
                  />
                </div>
                <div className="footerPartnerLogosRow2">
                  <img
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
                </div>
              </div>
            </div>
            <div className="footerMainBodyLinks">
              <h2>HOME</h2>
              <div className="footerLinkTitleUnderline">
                <div className="underline1" />
              </div>
              <ul>
                <li className="footerLinkedListItem">
                  <a>About Us</a>
                </li>
                <li className="footerLinkedListItem">
                  <a>Nú Heritage</a>
                </li>
                {/* <li className="footerLinkedListItem">
                  <a>Reports</a>
                </li>
                <li className="footerLinkedListItem">
                  <a>Blog</a>
                </li> */}
                {/* <li className="footerLinkedListItem">
                  <a>Support</a>
                </li>
                <li className="footerLinkedListItem">
                  <a>Trust</a>
                </li>
                <li className="footerLinkedListItem">
                  <a>Status</a>
                </li>
                <li className="footerLinkedListItem">
                  <a>Customer Experience Center</a>
                </li> */}
              </ul>
            </div>
            <div className="footerMainBodyLinks">
              {/* <h2>RESOURCES</h2>
              <div className="footerLinkTitleUnderline">
                <div className="underline2" />
              </div>
              <ul>
                <li className="footerLinkedListItem">
                  <a>Blogs</a>
                </li>
                <li className="footerLinkedListItem">
                  <a>Demos</a>
                </li>
                <li className="footerLinkedListItem">
                  <a>Webinars</a>
                </li>
                <li className="footerLinkedListItem">
                  <a>Whitepapers</a>
                </li>
                <li className="footerLinkedListItem">
                  <a>Datasheets</a>
                </li>
                <li className="footerLinkedListItem">
                  <a>Infographics</a>
                </li>
                <li className="footerLinkedListItem">
                  <a>Zero Trust Assesment</a>
                </li>
                <li className="footerLinkedListItem">
                  <a>ROI Calculator</a>
                </li>
              </ul> */}
            </div>
            <div className="footerMainBodySocial">
              <div className="footerSocialMediaItems">
                  <img
                    className={"footerSocialIcon"}
                    alt={``}
                    key={``}
                    src={data.allContentfulFooter.edges[0].node.socialIcons.linkedInIcon.file.url}
                  />
                  <img
                    className={"footerSocialIcon"}
                    alt={``}
                    key={``}
                    src={data.allContentfulFooter.edges[0].node.socialIcons.twitterIcon.file.url}
                  />
                  <img
                    className={"footerSocialIcon"}
                    alt={``}
                    key={``}
                    src={data.allContentfulFooter.edges[0].node.socialIcons.facebookIcon.file.url}
                  />
                  {/* <img
                    className={"footerSocialIcon"}
                    alt={``}
                    key={``}
                    src={data.allContentfulFooter.edges[0].node.socialIcons.twitterIcon.file.url}
                  /> */}
                  
              </div>
              <div className="footerPhoto">
                <div className="footerImageContainer">
                  <img
                    className={"footerImage"}
                    alt={``}
                    key={``}
                    src={data.allContentfulFooter.edges[0].node.additionalImage.file.url}
                  />
                </div>
                <div className="footerImageBackDrop" />
              </div>

              <div className="footerRightText">
                {/* <strong>Oktane21</strong> */}
                {/* <p>Catch up on all Oktane21 keynotes, sessions and annoucments.</p> */}
                <div className="footerCalltoActionR">
                  {/* <p>Learn More</p> */}
                  {/* <div className="footerCallToActionUnderline" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* To be implemented if a copyright text is needed */}
        <div className="footerBottom"></div>  
      </footer> 
  )
}