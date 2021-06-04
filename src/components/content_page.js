import React from "react"

import Layout from "./layout"

export default function ContentPage(props) {
  const hasHeader = "header" in props && props.header != null
  const headerStyle = {}
  if (hasHeader) {
    headerStyle.background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props.header})`
    headerStyle.backgroundSize = "cover"
  }
  return (
    <Layout
      brightNavbar={!hasHeader}
      title={props.headTitle || props.pageTitle}
      redirect={props.redirect}
    >
      <div id="page-content">
        <div
          id="header-top"
          className={hasHeader ? "" : "empty"}
          style={headerStyle}
        >
          <h1>{props.pageTitle}</h1>
        </div>

        <div class={`content-container ${props.grey ? "grey" : "white"}`}>
          {props.children}
        </div>
      </div>
    </Layout>
  )
}
