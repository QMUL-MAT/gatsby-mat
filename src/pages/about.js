import React from "react"
import { graphql, Link, useStaticQuery} from "gatsby"

import ContentPage from "../components/content_page"
import * as AboutStyle from "./about.module.css"

export default function About() {
  const links = ["staff", "sponsors", "facilities"]
  const data = useStaticQuery(graphql`
  {
    page: markdownRemark(
      fields: {slug: {eq: "about"}, category: {eq: "pages"}}
    ) {
      frontmatter {
        abstract
        slogen
      }
      html
    }
  }
  `)
  return (
    <ContentPage pageTitle="About us" header="/images/about_header.jpg">
      <div class="columns">
        {links.map(link => (
          <div class="column">
            <div className={AboutStyle.card}>
              <Link to={`/${link}/`}>
                <span className={AboutStyle.arrow}></span>
                <img src={`/images/about_${link}.jpg`} alt={`${link}`} />
                <h2>{link}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div class="columns">
        <div class="column is-two-thirds text-content">
          <h4>
            { data.page.frontmatter.abstract }
          </h4>
          <div dangerouslySetInnerHTML={{ __html: data.page.html }}></div>
        </div>
        <div class="column is-one-third is-flex has-text-centered">
          <div className={AboutStyle.infoBox}>
            <h1>{ data.page.frontmatter.slogen }</h1>
          </div>
        </div>
      </div>
    </ContentPage>
  )
}
