import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"
import * as CardStyle from "../components/card.module.css"

export default function Facilities() {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark(
      filter: {fields: {category: {eq: "facilities"}}}
      sort: {order: ASC, fields: frontmatter___order}
    ) {
      nodes {
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData(width: 800, aspectRatio: 1.7)
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
  `)
  return (
    <ContentPage pageTitle="Facilities" grey={true}>
      <div class="columns is-multiline is-mobile">
        {data.allMarkdownRemark.nodes.map(element => (
          <div className="column is-6-tablet is-12-mobile is-flex">
            <div className={CardStyle.card}>
              <GatsbyImage image={getImage(element.frontmatter.image)} />
              <div className={CardStyle.content}>
                <h3>{element.frontmatter.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: element.html }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContentPage>
  )
}
