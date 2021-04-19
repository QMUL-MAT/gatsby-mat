import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"
import * as CardStyle from "../components/card.module.css"

export default function Partners() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fields: { category: { eq: "partners" } } }
        sort: { order: ASC, fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            website
            image {
              childImageSharp {
                gatsbyImageData
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
    <ContentPage
      pageTitle="Partners we have worked with"
      header="/images/partners_header.jpg"
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
                  <a target="_blank" href={`${element.frontmatter.website}`}>
                    Link to Partner website &gt;
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
