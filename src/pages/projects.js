import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ContentPage from "../components/content_page"
import ProjectCard from "../components/project_card"

export default function Projects() {
  const data = useStaticQuery(graphql`
{
  allMarkdownRemark(
    filter: { fields: { category: { eq: "projects" } } }
    sort: { order: DESC, fields: fields___sortYear }
  ) {
    nodes {
      frontmatter {
        title
        year
        student {
          frontmatter {
            name
          }
        }
        image {
          childImageSharp {
            gatsbyImageData(width: 600 height: 385)
          }
        }
      }
      fields {
        category
        slug
        sortYear
      }
    }
  }
}
    `)
  return (
    <ContentPage pageTitle="Projects" header="/images/projects_header.jpg">
      <div className="columns is-mobile is-multiline">
        {data.allMarkdownRemark.nodes.map(element => (
          <ProjectCard
            title={ element.frontmatter.title }
            year={ element.frontmatter.year }
            student={ element.frontmatter.student }
            url={ element.fields.slug }
            image={ element.frontmatter.image }
          />
        ))}
      </div>
    </ContentPage>
  )
}
