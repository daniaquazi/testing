import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./scss/ValueProposition.scss"

export default function ValueProposition() {
  const data = useStaticQuery(graphql`
    query ValuePropQuery {
      allContentfulDisplayBar {
        edges {
          node {
            referenceField1 {
              description
              valuePropText
              icon {
                file {
                  url
                }
              }
            }
            referenceField2 {
              description
              valuePropText
              icon {
                file {
                  url
                }
              }
            }
            referenceField3 {
              description
              valuePropText
              icon {
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
    <div className="valuePropositionDisplayBar">
      <div className="valueProposition">
          <div className="valuePropImage">
            <img
              alt={``}
              key={``} 
              src={data.allContentfulDisplayBar.edges[0].node.referenceField1.icon.file.url}
            />
          </div>
          <div className="valuePropositionText">
            <p className="valuePropositionTitle">{data.allContentfulDisplayBar.edges[0].node.referenceField1.description}</p>
            <p className="valuePropositionBody">{data.allContentfulDisplayBar.edges[0].node.referenceField1.valuePropText}</p>
          </div>
      </div>
      <div className="valueProposition">
        <div className="valuePropImage">
          <img
            alt={``}
            key={``} 
            src={data.allContentfulDisplayBar.edges[0].node.referenceField2.icon.file.url}
          />
        </div>
        <div className="valuePropositionText">
          <p className="valuePropositionTitle">{data.allContentfulDisplayBar.edges[0].node.referenceField2.description}</p>
          <p className="valuePropositionBody">{data.allContentfulDisplayBar.edges[0].node.referenceField2.valuePropText}</p>
        </div>
      </div>
      <div className="valueProposition">
        <div className="valuePropImage">
          <img
            className="propImage"
            alt={``}
            key={``} 
            src={data.allContentfulDisplayBar.edges[0].node.referenceField3.icon.file.url}
          />
        </div>
        <div className="valuePropositionText">
          <p className="valuePropositionTitle">{data.allContentfulDisplayBar.edges[0].node.referenceField3.description}</p>
          <p className="valuePropositionBody">{data.allContentfulDisplayBar.edges[0].node.referenceField3.valuePropText}</p>
        </div>
      </div>
    </div>
  )
}