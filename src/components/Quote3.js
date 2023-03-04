import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import './scss/Quote3.scss'


function Quote3() {
    const data = useStaticQuery(graphql`
        query Quote3Query {
            allContentfulQuote3 {
                edges {
                    node {
                        quoteText
                        subTitle
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
            <div className="quote2_text1_container">
                {/* <p className="quote2_text">{data.allContentfulQuote3.edges[0].node.quoteText}</p> */}
                <p className="quote2_text">"Culture Shapes Values.</p>
            </div>
            <div className="quote2_text2_container">
                <p className="quote2_text">"Values Shape the Future."</p>
            </div>
            <div className="quote2_subtitle_container">
                <p className="author_subtitle">{data.allContentfulQuote3.edges[0].node.subTitle}</p>
            </div>
        </div>
    )
}

export default Quote3