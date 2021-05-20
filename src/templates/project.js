import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"
import * as ProjectStyle from "./project.module.css"

export const query = graphql`
  query($slug: String!, $category: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }, category: { eq: $category } }
    ) {
      frontmatter {
        title
        year
        abstract
        host
        host_website
        student {
          frontmatter {
            name
          }
          fields {
            slug
          }
        }
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
export default function Project({ data }) {
  const element = data.markdownRemark
  return (
    <ContentPage pageTitle="Project" header="/images/projects_header.jpg">
      <div class="columns">
        <div class="column is-one-third text-content">
          <h1>
            {element.frontmatter.title}{" "}
            <span className={ProjectStyle.year}>
              {element.frontmatter.year}
            </span>
          </h1>
          <div className="metadata">
            {element.frontmatter.student ? (
              <p>
                <b>Student:</b>{" "}
                <Link
                  to={`/students/${element.frontmatter.student.fields.slug}`}
                >
                  {element.frontmatter.student.frontmatter.name}
                </Link>
              </p>
            ) : (
              <></>
            )}
            {element.frontmatter.host ? (
              <p>
                <b>Host:</b>{" "}
                {element.frontmatter.host_website ? (
                  <a href={element.frontmatter.host_website}>
                    {element.frontmatter.host}
                  </a>
                ) : (
                  <>{element.frontmatter.host}</>
                )}
              </p>
            ) : (
              <></>
            )}
          </div>
          <p>
            <b>
              <div
                dangerouslySetInnerHTML={{
                  __html: element.frontmatter.abstract,
                }}
              ></div>
            </b>
          </p>
          <div dangerouslySetInnerHTML={{ __html: element.html }}></div>
        </div>
        <div class="column is-two-third">
          <GatsbyImage image={getImage(element.frontmatter.image)} />
        </div>
      </div>
    </ContentPage>
  )
}
