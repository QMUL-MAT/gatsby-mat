import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"
import ProjectCard from "../components/project_card"

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
        website
        image {
          childImageSharp {
            gatsbyImageData(width: 600)
          }
        }
        thesis {
          title
          url
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
    bib: file(name: { eq: $slug }, ext: { eq: ".bib" }) {
      fields {
        html
      }
    }
  }
`
export default function Student({ data }) {
  const element = data.student
  return (
    <ContentPage
      pageTitle="Student"
      headTitle={element.frontmatter.name}
      header="/images/students_header.jpg"
    >
      <div class="columns">
        <div class="column is-one-third text-content">
          <GatsbyImage image={getImage(element.frontmatter.image)} />
          <h1>{element.frontmatter.name}</h1>
          <div className="metadata">
            {element.frontmatter.alumni ? <p>MAT Alumni</p> : <></>}
            <p>
              <b>Course:</b> {element.frontmatter.course}
            </p>
            <p>
              <b>Year:</b> {element.frontmatter.year}
            </p>
            {element.frontmatter.thesis && (
              <p>
                <b>Thesis:</b>{" "}
                <a
                  href={element.frontmatter.thesis.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {element.frontmatter.thesis.title}
                </a>
              </p>
            )}
            {element.frontmatter.website ? (
              <p>
                <b>Website:</b>{" "}
                <a
                  href={`${element.frontmatter.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {element.frontmatter.website}
                </a>
              </p>
            ) : (
              <></>
            )}
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
                  slug={element.fields.slug}
                  image={element.frontmatter.image}
                />
              </div>
            ))}
          </div>
          {data.bib && (
            <>
              <hr />
              <h1 class="title">Publications</h1>
              <div
                dangerouslySetInnerHTML={{ __html: data.bib.fields.html }}
              ></div>
            </>
          )}
        </div>
      </div>
    </ContentPage>
  )
}
