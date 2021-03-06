import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"
import * as ProjectStyle from "./project.module.css"
import Video from "../components/video"

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
        video_provider
        video_id
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
            gatsbyImageData(width: 1000)
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
    <ContentPage
      pageTitle="Project"
      headTitle={element.frontmatter.title}
      header="/images/projects_header.jpg"
    >
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
          <div
            className={ProjectStyle.abstract}
            dangerouslySetInnerHTML={{
              __html: element.frontmatter.abstract,
            }}
          ></div>
          <div dangerouslySetInnerHTML={{ __html: element.html }}></div>
        </div>
        <div class="column is-two-third">
          {element.frontmatter.video_provider &&
          element.frontmatter.video_id ? (
            <Video
              provider={element.frontmatter.video_provider}
              id={element.frontmatter.video_id}
              title={element.frontmatter.title}
            />
          ) : (
            <GatsbyImage image={getImage(element.frontmatter.image)} />
          )}
        </div>
      </div>
    </ContentPage>
  )
}
