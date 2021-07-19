import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"
import * as EventStyle from "./event.module.css"

export const query = graphql`
  query($slug: String!, $category: String!, $subItems: String!) {
    event: markdownRemark(
      fields: { slug: { eq: $slug }, category: { eq: $category } }
    ) {
      frontmatter {
        title
      }
      html
    }
    projects: allMarkdownRemark(
      filter: { fields: { category: { eq: $subItems } } }
    ) {
      nodes {
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
        }
        fields {
          category
          slug
        }
      }
    }
  }
`
export default function Event({ data }) {
  const element = data.event
  return (
    <ContentPage
      pageTitle={element.frontmatter.title}
      headTitle={element.frontmatter.title}
      header="/images/contact_header.jpg"
    >
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth text-content">
          <div className={EventStyle.eventContent}>
            <div dangerouslySetInnerHTML={{ __html: element.html }}></div>
          </div>
        </div>
      </div>
      {data.projects.nodes.length ? (
        <div className={EventStyle.gallery}>
          <div class="columns is-multiline">
            {data.projects.nodes.map(element => (
              <div className="column is-one-third">
                <Link
                  to={`/${element.fields.category}/${element.fields.slug}`}
                >
                  <GatsbyImage image={getImage(element.frontmatter.image)} alt={element.frontmatter.title} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </ContentPage>
  )
}
