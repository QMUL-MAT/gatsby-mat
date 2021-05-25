import React from "react"
import { graphql, useStaticQuery} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"

export default function Contact() {
  const data = useStaticQuery(graphql`
    {
      page: markdownRemark(
        fields: { slug: { eq: "contact" }, category: { eq: "pages" } }
      ) {
        frontmatter {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        html
      }
    }
  `)
  return (
    <ContentPage pageTitle="Contact" header="/images/contact_header.jpg">
      <div class="columns">
        <div class="column is-two-thirds text-content">
          <div dangerouslySetInnerHTML={{ __html: data.page.html }}></div>
        </div>
        <div class="column">
          <GatsbyImage image={getImage(data.page.frontmatter.image)} />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9929.842169290736!2d-0.0434591!3d51.5231123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc748e02e1d819963!2sSchool+of+Electronic+Engineering+and+Computer+Science!5e0!3m2!1sen!2suk!4v1478296409783"
            allowfullscreen=""
            width="100%"
            height="450"
            frameborder="0"
            title="Map"
          ></iframe>
        </div>
      </div>
    </ContentPage>
  )
}
