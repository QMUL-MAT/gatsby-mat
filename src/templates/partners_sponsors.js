import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"
import * as CardStyle from "../components/card.module.css"

export const query = graphql`
  query($category: String!) {
    allMarkdownRemark(
      filter: { fields: { category: { eq: $category } } }
      sort: { order: ASC, fields: frontmatter___order }
    ) {
      nodes {
        frontmatter {
          website
          image {
            childImageSharp {
              gatsbyImageData(width: 400, height: 250)
            }
          }
        }
        html
        fields {
          category
        }
      }
    }
  }
`

export default function PartnersSponsors({data, pageContext}) {
  return (
    <ContentPage
      pageTitle={pageContext.pageTitle}
      header={pageContext.header}
      grey={true}
    >
      <div class="columns is-multiline is-mobile">
        {data.allMarkdownRemark.nodes.map(element => (
          <div className="column is-6-tablet is-3-desktop is-flex">
            <div className={CardStyle.card}>
              <GatsbyImage image={getImage(element.frontmatter.image)} />
              <div className={CardStyle.content}>
                <div dangerouslySetInnerHTML={{ __html: element.html }}></div>
                {element.frontmatter.website !== null ? (
                  <a
                    target="_blank"
                    href={`${element.frontmatter.website}`}
                    rel="noreferrer"
                  >
                    Website &gt;
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContentPage>
  )
}
