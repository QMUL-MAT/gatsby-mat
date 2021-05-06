import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"
import * as StudentsStyle from "./students.module.css"

export default function Students() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fields: { category: { eq: "students" } } }
        sort: { order: DESC, fields: frontmatter___year }
      ) {
        nodes {
          frontmatter {
            name
            alumni
            course
            year
            image {
              childImageSharp {
                gatsbyImageData
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
  `)
  return (
    <ContentPage pageTitle="Students" header="/images/students_header.jpg">
      <div class="columns is-multiline is-mobile">
        {data.allMarkdownRemark.nodes.map(element => (
          <div
            className={`column is-half-mobile is-one-quarter-tablet is-2-desktop ${StudentsStyle.card}`}
          >
            <div class={StudentsStyle.hover}></div>
            <a href={`${element.fields.slug}`}>
              <GatsbyImage image={getImage(element.frontmatter.image)} />
              <div>
                <h3>{element.frontmatter.name}</h3>
                {element.frontmatter.alumni ? (
                  <p>
                    <em>MAT Alumni</em>
                  </p>
                ) : (
                  <></>
                )}
                <p>
                  <em>
                    <strong>Course:</strong> {element.frontmatter.course}
                  </em>
                </p>
                <p>
                  <em>
                    <strong>Year:</strong> {element.frontmatter.year}
                  </em>
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </ContentPage>
  )
}
