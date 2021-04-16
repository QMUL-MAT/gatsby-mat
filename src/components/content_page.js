import React from "react"

import Layout from "./layout"

export default function ContentPage(props) {
  const brightNavbar = !('headerClass' in props)
  return (
    <Layout brightNavbar={brightNavbar}>
      <div id="page-content">
        <div id="header-top" className={ props.headerClass || "empty" }>
          <h1>{ props.pageTitle }</h1>
        </div>

        <div class={`content-container ${props.grey ? 'grey' : 'white'}`}>
          { props.children }
        </div>
      </div>
    </Layout>
  )
}