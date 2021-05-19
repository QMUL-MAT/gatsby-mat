import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"
import ProjectCard from "../components/project_card"
import * as StudentStyle from "./student.module.css"

export const query = graphql`
  query($slug: String!, $category: String!) {
    student: markdownRemark(
      fields: { slug: { eq: $slug }, category: { eq: $category } }
    ) {
      frontmatter {
        name
        alumni
        course
        year
        image {
          childImageSharp {
            gatsbyImageData(width: 600)
          }
        }
      }
      html
    }
    projects: allMarkdownRemark(
      filter: {
        fields: { category: { eq: "projects" } }
        frontmatter: { student: { fields: { slug: { eq: $slug } } } }
      }
      sort: { order: DESC, fields: fields___sortYear }
    ) {
      nodes {
        frontmatter {
          title
          year
          image {
            childImageSharp {
              gatsbyImageData(width: 600, height: 385)
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
export default function Student({ data }) {
  const element = data.student
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
        <div class="column is-two-third">
          <div class="columns is-multiline">
            {data.projects.nodes.map(element => (
              <div class="column is-half">
                <ProjectCard
                  title={element.frontmatter.title}
                  year={element.frontmatter.year}
                  url={element.fields.slug}
                  image={element.frontmatter.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentPage>
  )
}
