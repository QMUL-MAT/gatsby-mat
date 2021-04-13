import React from "react"

import Layout from "./layout"

export default function ContentPage(props) {
  return (
    <Layout>
      <div id="page-content">
        <div id="header-top" class={ props.headerClass }>
          <h1>{ props.pageTitle }</h1>
        </div>

        <div class="content-container">
          { props.children }
        </div>
      </div>
    </Layout>
  )
}