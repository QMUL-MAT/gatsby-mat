import React from "react"
import { graphql, Link, useStaticQuery} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"
import * as ProgrammesStyle from "./programmes.module.css"

export default function Programmes() {
  const data = useStaticQuery(graphql`
  {
    page : markdownRemark(
      fields: { slug: { eq: "programmes" }, category: { eq: "pages" } }
    ) {
      frontmatter {
        title
      }
      html
    }
    programmes: allMarkdownRemark(
      filter: {fields: {category: {eq: "programmes"}}}
    ) {
      nodes {
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
  `)
  return (
    <ContentPage pageTitle="Programmes" header="/images/programmes_header.jpg">
      <div class="columns is-multiline is-mobile">
        {data.programmes.nodes.map(element => (
          <div class="column is-half-mobile is-half-tablet is-one-quarter-desktop">
            <Link to={`/programmes/${element.fields.slug}/`}>
              <div className={ProgrammesStyle.frame}>
                <GatsbyImage image={getImage(element.frontmatter.image)} />
                <div className={ProgrammesStyle.frameContent}>
                  <div className={ProgrammesStyle.info}>
                    <h2>{ element.frontmatter.title }</h2>
                    <p>Find out more about our { element.frontmatter.title } and APPLY HERE.</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}

        <div class="column text-content">
          <h2>{ data.page.frontmatter.title }</h2>
          <div dangerouslySetInnerHTML={{ __html: data.page.html }}></div>
        </div>
      </div>
    </ContentPage>
  )
}
