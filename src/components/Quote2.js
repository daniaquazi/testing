import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import './scss/Quote2.scss'


function Quote2() {
    const data = useStaticQuery(graphql`
        query Quote2Query {
            allContentfulQuote2 {
                edges {
                    node {
                        quoteText
                    }
                }
            }
        }
    `);

    return (
        <div className="quote2_container">
            <div className="quote2_logo_container">
                <div className="quote2_logo_line"></div>
                <h1 className="quote2_logo_text"><span className="quote_2_text_pink">F.</span><span className="quote_2_text_black">K</span></h1>
                <div className="quote2_logo_line"></div>
            </div>
            <div className="quote2_text_container">
                <p className="quote2_text">{data.allContentfulQuote2.edges[0].node.quoteText}</p>
            </div>
        </div>
    )
}

export default Quote2