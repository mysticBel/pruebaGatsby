import React from 'react'
import BioComponent from "../components/BioComponent";
import Footer from "../components/footer"
import ContentArticle from "../components/content-article"

function article( {title}) {
  
  return (
    <div> 
        <h1> {`${title = "Título de Articulo"} `} </h1>
        <BioComponent />
        <ContentArticle />
        <Footer />
    </div>
  )
}

export default article