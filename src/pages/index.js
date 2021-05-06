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
      slideshow: allMarkdownRemark(
        filter: { fields: { category: { eq: "slideshow" } } }
        sort: { order: ASC, fields: fields___slug }
      ) {
        nodes {
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(width: 1440)
              }
            }
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
              <div style={{background: `url(${getSrc(element.frontmatter.image)})`}}/>
              <h1>{element.frontmatter.title}</h1>
            </div>
          ))}
        </Slider>
      </div>
      <div id="home-content-start"></div>
      <div id="container">
        <div id="home-projects" class="columns is-gapless is-multiline is-mobile">
          <ProjectCard
            title="MouldCraft"
            year="2019"
            student="Raphael Kim"
            url="/students_projects/mouldcraft/"
            img="http://www.mat.qmul.ac.uk/wp-content/uploads/2019/03/IMG_8430-800x450.jpg"
          />
          <ProjectCard
            title="MouldCraft"
            year="2019"
            student="Raphael Kim"
            url="/students_projects/mouldcraft/"
            img="http://www.mat.qmul.ac.uk/wp-content/uploads/2019/03/IMG_8430-800x450.jpg"
          />
          <ProjectCard
            title="MouldCraft"
            year="2019"
            student="Raphael Kim"
            url="/students_projects/mouldcraft/"
            img="http://www.mat.qmul.ac.uk/wp-content/uploads/2019/03/IMG_8430-800x450.jpg"
          />
          <ProjectCard
            title="MouldCraft"
            year="2019"
            student="Raphael Kim"
            url="/students_projects/mouldcraft/"
            img="http://www.mat.qmul.ac.uk/wp-content/uploads/2019/03/IMG_8430-800x450.jpg"
          />
          <ProjectCard
            title="MouldCraft"
            year="2019"
            student="Raphael Kim"
            url="/students_projects/mouldcraft/"
            img="http://www.mat.qmul.ac.uk/wp-content/uploads/2019/03/IMG_8430-800x450.jpg"
          />
          <div class="column home-projects-more">
            <img src="/images/home_project_blank.jpg" width="100%" alt="More projects" />
            <Link to="/students-projects/">
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
        <div class="home-programmes-apply">
          <div class="home-programmes-apply-text">
            <div>
              <span>Apply Now for September 2021</span>
              <p>First application deadline is January 31</p>
            </div>
          </div>
        </div>
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
          <p>Some of the organisations we work with:</p>
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
                we work with
              </p>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
