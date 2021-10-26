import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import ProjectCard from "../components/project_card"
import Layout from "../components/layout"

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      meta: markdownRemark(
        fields: {slug: {eq: "index"}, category: {eq: "pages"}}
      ) {
        frontmatter {
          applyNowTitle
          applyNowSubtitle
        }
      }
      slideshow: allMarkdownRemark(
        filter: { fields: { category: { eq: "slideshow" } } }
        sort: { order: ASC, fields: fields___slug }
      ) {
        nodes {
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(width: 1440, height: 800)
              }
            }
          }
        }
      }
      projects: allMarkdownRemark(
        filter: {
          fields: { category: { eq: "projects" } }
          frontmatter: { featured: { eq: true } }
        }
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
                gatsbyImageData(width: 800, height: 450)
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
      partners: allMarkdownRemark(
        filter: { fields: { category: { eq: "partners" } } }
        sort: { order: ASC, fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      news: allTwitterStatusesUserTimelineTimeline(limit: 3) {
        edges {
          node {
            full_text
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
  const slideshowCarouselSettings = {
    infinite: true,
    dots: true,
    fade: true,
    autoplaySpeed: 6000,
    speed: 2000,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
  }
  const partnersCarouselSettings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 6,
  }
  return (
    <Layout>
      <div id="header-slideshow">
        <Slider {...slideshowCarouselSettings}>
          {data.slideshow.nodes.map(element => (
            <div class="header-slideshow-item">
              <div
                style={{
                  background: `url(${getSrc(element.frontmatter.image)})`,
                }}
              />
              <h1>{element.frontmatter.title}</h1>
            </div>
          ))}
        </Slider>
      </div>
      <div id="home-content-start"></div>
      <div id="container">
        <div
          id="home-projects"
          class="columns is-gapless is-multiline is-mobile"
        >
          {data.projects.nodes.map(element => (
            <div className="column is-one-third-tablet is-full-mobile">
              <ProjectCard
                title={element.frontmatter.title}
                year={element.frontmatter.year}
                student={element.frontmatter.student}
                slug={element.fields.slug}
                image={element.frontmatter.image}
              />
            </div>
          ))}

          <div class="column home-projects-more">
            <img
              src="/images/home_project_blank.jpg"
              width="100%"
              alt="More projects"
            />
            <Link to="/projects">
              <div class="home-projects-more-text">
                <div>
                  <span>
                    More
                    <br />
                    Projects
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div class="columns is-gapless home-programmes">
          <div class="column is-one-third">
            <div class="home-programmes-apply">
              <div class="home-programmes-apply-text">
                <div>
                  <span>{data.meta.frontmatter.applyNowTitle}</span>
                  <p>{data.meta.frontmatter.applyNowSubtitle}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-two-third">
            <div id="home-programmes-info">
              <h2>Programmes</h2>

              <div id="home-programmes-info-blocks">
                <Link to="/programmes/phd-programme/">
                  <div class="home-programmes-info-block-frame block1">
                    <span class="home-programmes-info-block">
                      <h1>PhD</h1>
                      <p>Find out more about our PhD Programme and APPLY HERE.</p>
                    </span>
                  </div>
                </Link>
                <Link to="/programmes/masters-programme/">
                  <div class="home-programmes-info-block-frame block2">
                    <span class="home-programmes-info-block">
                      <h1>Masters</h1>
                      <p>
                        Find out more about our Masters Programme and APPLY HERE.
                      </p>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="home-news-bg">
          <div class="block" id="home-news">
            <h2>News</h2>
            <div id="home-news-articles">
              {data.news.edges.map(element => (
                <article>
                  <div>
                    <GatsbyImage image={getImage(element.node.image)} />
                    <hr />
                    <p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: element.node.full_text,
                        }}
                      ></div>
                      <a
                        href={`https://twitter.com/QMUL_MAT/status/${element.node.id_str}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read more
                      </a>
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <Link to="/news/">
              <button>
                View All
                <p>
                  The latest News &amp;
                  <br />
                  Tweets from MAT
                </p>
              </button>
            </Link>
          </div>
        </div>
        <div id="home-partners">
          <h2>Partners</h2>
          <p>Some of the organisations we have worked with:</p>
          <div id="home-partners-logos">
            <Slider {...partnersCarouselSettings}>
              {data.partners.nodes.map(element => (
                <div class="item">
                  <GatsbyImage image={getImage(element.frontmatter.image)} />
                </div>
              ))}
            </Slider>
          </div>
          <Link to="/partners/">
            <button>
              View All
              <p>
                The Organisations
                <br />
                we have worked with
              </p>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
