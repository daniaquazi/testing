import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import "./scss/NewsletterBar.scss"

export default function NewsletterBar() {
    const data = useStaticQuery(graphql`
        query newsletterQuery {
            allContentfulNewsletterSignUp {
                edges {
                  node {
                    callToAction
                    bodyText {
                      bodyText
                    }
                    title
                    termsAndConditionsText
                    radioButtonSelection1
                    radioButtonSelection2
                    image {
                      file {
                        url
                      }
                    }
                  }
                }
            }
        }`)

    return (
        <div className="newsletterContainer">
            <div className="imageContainerNewsletter">
                <img
                    className={"bigImageNL"}
                    alt={``}
                    key={``} 
                    src={data.allContentfulNewsletterSignUp.edges[0].node.image.file.url}
                />
            </div>
            <div className="bottomNL">
              <div className="textContainerNewsLetter">

                <div className="newsletterTitle">
                  <p className="titleNL">{data.allContentfulNewsletterSignUp.edges[0].node.title}</p>
                </div>

                <div className="newsletterBody">
                  <p className="bodyTextNL">{data.allContentfulNewsletterSignUp.edges[0].node.bodyText.bodyText}</p>
                </div>

                <div className="radioSelectionNL">
                    <label className="radioButtonsNL">
                      <span className="radioInput">
                        <input type="radio" id="man" name="newsletterRadioButton" value={data.allContentfulNewsletterSignUp.edges[0].node.radioButtonSelection1} />
                        <span className="radioControl"></span>
                      </span>
                      <span className="radioLabel">{data.allContentfulNewsletterSignUp.edges[0].node.radioButtonSelection1}</span>
                    </label>
                    <label className="radioButtonsNL">
                      <span className="radioInput">
                        <input type="radio" id="woman" name="newsletterRadioButton" value={data.allContentfulNewsletterSignUp.edges[0].node.radioButtonSelection2} />
                        <span className="radioControl"></span>
                      </span>
                      <span className="radioLabel">{data.allContentfulNewsletterSignUp.edges[0].node.radioButtonSelection2}</span>
                    </label>
                </div>

                <div className="newsletterTerms">
                  <p className="termsNL">{data.allContentfulNewsletterSignUp.edges[0].node.termsAndConditionsText}</p>
                </div>

                <div className="signUpSection">
                  <input type="text" id="emailInput" className="emailInput" />
                  <input type="submit" className="callToActionNL" value={data.allContentfulNewsletterSignUp.edges[0].node.callToAction} />
                </div>

              </div>
            </div>
        </div>
    )
}