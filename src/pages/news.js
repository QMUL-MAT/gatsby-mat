import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ContentPage from "../components/content_page"
import * as CardStyle from "../components/card.module.css"

export default function News() {
  const data = useStaticQuery(graphql`
    {
      allTwitterStatusesUserTimelineTimeline {
        edges {
          node {
            full_text
            created_at
            id_str
            image {
              childImageSharp {
                gatsbyImageData(height: 200, width: 600)
              }
            }
            retweeted_status {
              user {
                name
                profile_banner_url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <ContentPage pageTitle="News" grey={true} header="/images/news_header.jpg">
      <div class="columns is-multiline is-mobile">
        {data.allTwitterStatusesUserTimelineTimeline.edges.map(element => (
          <div className="column is-6-tablet is-3-desktop is-flex">
            <div className={CardStyle.card}>
              <GatsbyImage image={getImage(element.node.image)} />
              <div className={CardStyle.content}>
                <b>{new Date(element.node.created_at).toDateString()}</b>
                <div
                  dangerouslySetInnerHTML={{ __html: element.node.full_text }}
                ></div>
                <a
                  href={`https://twitter.com/QMUL_MAT/status/${element.node.id_str}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContentPage>
  )
}
