import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import "./scss/Quote1.scss"


export default function Quote1() {
    const data = useStaticQuery(graphql`
        query QuoteQuery {
            allContentfulQuote {
                edges {
                    node {
                        quote {
                            quote
                        }
                        quoteIconSvg01 {
                            file {
                                url
                            }
                        }
                        quoteIconSvg02 {
                            file {
                                url
                            }
                        }
                    }
                }
            }
        }`)

    return (
        <div className="quoteContainer">
            <div className="openingQuoteContainer">
                <img
                    className={"openingQuotationMarks"}
                    alt={``}
                    key={``} 
                    src={data.allContentfulQuote.edges[0].node.quoteIconSvg01.file.url}
                />
            </div>
            <div className="textContainer">
                <p className="quoteText">{data.allContentfulQuote.edges[0].node.quote.quote}</p>
            </div>
            <div className="closingQuoteContainer">
                <img
                    className={"closingQuotationMarks"}
                    alt={``}
                    key={``} 
                    src={data.allContentfulQuote.edges[0].node.quoteIconSvg02.file.url}
                />
            </div>
        </div>
    )
}
