import * as React from "react"
import FeatureBar from "./FeatureBar"
import FeatureBarPink from "./FeatureBarPink"
import Footer from "./Footer"
import "./Layout.css"
import NavBar from "./Nav/NavBar"
import NewsletterBar from "./NewsletterBar"


const Layout = ({ children }) => {


  return (
    <div>
      <NavBar />
      <FeatureBarPink />
      <FeatureBar />
      
      {children}

      <NewsletterBar />
      <Footer />
    </div> 
  )
}


export default Layout
