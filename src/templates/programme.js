import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"
import * as ProgrammeStyle from "./programme.module.css"

export const query = graphql`
  query($slug: String!, $category: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }, category: { eq: $category } }
    ) {
      frontmatter {
        title
        subtitle
        registration_link
        registration_text
        images {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
    }
  }
`
export default function Programme({data}) {
  const element = data.markdownRemark
  return (
    <ContentPage
      pageTitle={element.frontmatter.title}
      header="/images/programmes_header.jpg"
    >
      <div class="columns">
        <div class="column text-content">
          <h2>{element.frontmatter.subtitle}</h2>
          <a
            className={`my-4 ${ProgrammeStyle.applyNow}`}
            href={`${element.frontmatter.registration_link}`}
            target="_blank"
            rel="noreferrer"
          >
            {element.frontmatter.registration_text}
          </a>
          <div dangerouslySetInnerHTML={{ __html: element.html }}></div>
        </div>
        <div class="column is-one-third">
          {element.frontmatter.images.map(image => (
            <GatsbyImage image={getImage(image)} />
          ))}
        </div>
      </div>
    </ContentPage>
  )
}
