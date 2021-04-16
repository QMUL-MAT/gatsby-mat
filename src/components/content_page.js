import React from "react"

import Layout from "./layout"

export default function ContentPage(props) {
  return (
    <Layout bright={!('headerClass' in props)}>
      <div id="page-content">
        <div id="header-top" className={ props.headerClass || "empty" }>
          <h1>{ props.pageTitle }</h1>
        </div>

        <div class="content-container">
          { props.children }
        </div>
      </div>
    </Layout>
  )
}