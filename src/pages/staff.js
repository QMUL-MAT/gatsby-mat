import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"
import * as StaffStyle from "./staff.module.css"

export default function Staff() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fields: { category: { eq: "staff" } } }
        sort: { order: ASC, fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            name
            role
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
    <ContentPage pageTitle="Staff" grey={true}>
      <div class="columns is-mobile is-multiline">
        {data.allMarkdownRemark.nodes.map(element => (
          <div className="column is-12-mobile is-6-tablet is-4-desktop is-3-fullhd">
            <div class={StaffStyle.card}>
              <GatsbyImage image={getImage(element.frontmatter.image)} />
              <div class={StaffStyle.content}>
                <div class="text-content">
                  <p class={StaffStyle.intro}>
                    <h3>{element.frontmatter.name}</h3>
                    <i>{element.frontmatter.role}</i>
                  </p>
                  <div class={StaffStyle.bio}>
                    <div>
                      <h3>{element.frontmatter.name}</h3>
                      <i>{element.frontmatter.role}</i>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: element.html }}
                    ></div>
                    {element.frontmatter.website !== null ? (
                      <a
                        target="_blank"
                        href={`${element.frontmatter.website}`}
                      >
                        Homepage
                      </a>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContentPage>
  )
}
