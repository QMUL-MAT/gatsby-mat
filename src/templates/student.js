import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"
import * as StudentStyle from "./student.module.css"

export const query = graphql`
  query($slug: String!, $category: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }, category: { eq: $category } }
    ) {
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
      html
    }
  }
`
export default function Post(props) {
  const element = props.data.markdownRemark
  return (
    <ContentPage pageTitle="Student" header="/images/students_header.jpg">
      <div class="columns">
        <div class="column is-one-third text-content">
          <GatsbyImage image={getImage(element.frontmatter.image)} />
          <h1>{element.frontmatter.name}</h1>
          <div className={StudentStyle.metadata}>
            {element.frontmatter.alumni ? <p>MAT Alumni</p> : <></>}
            <p>
              <b>Course:</b> {element.frontmatter.course}
            </p>
            <p>
              <b>Year:</b> {element.frontmatter.year}
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: element.html }}></div>
        </div>
        <div class="column is-one-third"></div>
      </div>
    </ContentPage>
  )
}
