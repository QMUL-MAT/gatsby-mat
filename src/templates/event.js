import React from "react"
import { graphql } from "gatsby"

import ContentPage from "../components/content_page"
import * as EventStyle from "./event.module.css"

export const query = graphql`
  query($slug: String!, $category: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }, category: { eq: $category } }
    ) {
      frontmatter {
        title
      }
      html
    }
  }
`
export default function Event({ data }) {
  const element = data.markdownRemark
  return (
    <ContentPage
      pageTitle={element.frontmatter.title}
      headTitle={element.frontmatter.title}
      header="/images/contact_header.jpg"
    >
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth text-content">
          <div className={ EventStyle.eventContent}>
            <div dangerouslySetInnerHTML={{ __html: element.html }}></div>
          </div>
        </div>
      </div>
    </ContentPage>
  )
}
