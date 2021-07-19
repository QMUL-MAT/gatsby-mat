import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"

export const query = graphql`
  query($slug: String!, $category: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }, category: { eq: $category } }
    ) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
    }
  }
`
export default function Ars2019Project({ data }) {
  const element = data.markdownRemark
  return (
    <ContentPage
      pageTitle={element.frontmatter.title}
      headTitle={element.frontmatter.title}
      header="/images/contact_header.jpg"
    >
      <div class="columns">
        <div class="column is-one-fifth is-offset-one-fifth">
          <GatsbyImage image={getImage(element.frontmatter.image)} />
        </div>
        <div class="column is-two-fifths text-content">
          <div dangerouslySetInnerHTML={{ __html: element.html }}></div>
          <Link to="/events/ars-2019">Back to Ars Electronica 2019</Link>
        </div>
      </div>
    </ContentPage>
  )
}
