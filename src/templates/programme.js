import React from "react"
import { graphql } from "gatsby"

import ContentPage from "../components/content_page"

export const query = graphql`
  query($slug: String!, $category: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }, category: { eq: $category } }
    ) {
      frontmatter {
        title
        subtitle
        registration_link
        registration_text
      }
      html
    }
  }
`
export default function Post(props) {
  const element = props.data.markdownRemark
  return (
    <ContentPage
      pageTitle="PhD Programme"
      header="/images/programmes_header.jpg"
    >
      <div class="columns">
        <div class="column text-content">
          <h2>{element.frontmatter.subtitle}</h2>
          <br />
          <a href={`${element.frontmatter.registration_link}`} target="_blank">
            <button>{element.frontmatter.registration_text}</button>
          </a>
          <div dangerouslySetInnerHTML={{ __html: element.html }}></div>
        </div>
        <div class="column is-one-third">
          <img
            src="http://www.mat.qmul.ac.uk/wp-content/uploads/2016/11/img_s3256.jpg"
            class="attachment-post-thumbnail size-post-thumbnail"
            alt=""
            loading="lazy"
            srcset="http://www.mat.qmul.ac.uk/wp-content/uploads/2016/11/img_s3256.jpg 709w, http://www.mat.qmul.ac.uk/wp-content/uploads/2016/11/img_s3256-300x198.jpg 300w"
            sizes="(max-width: 709px) 100vw, 709px"
            width="709"
            height="469"
          />
          <img
            src="http://www.mat.qmul.ac.uk/wp-content/uploads/2016/11/img_s9561.jpg"
            class="attachment-post-thumbnail size-post-thumbnail"
            alt=""
            loading="lazy"
            srcset="http://www.mat.qmul.ac.uk/wp-content/uploads/2016/11/img_s9561.jpg 709w, http://www.mat.qmul.ac.uk/wp-content/uploads/2016/11/img_s9561-236x300.jpg 236w"
            sizes="(max-width: 709px) 100vw, 709px"
            width="709"
            height="902"
          />
        </div>
      </div>
    </ContentPage>
  )
}
