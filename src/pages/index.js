import React, { Component } from "react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import HomeNewsItem from "../components/home_news_item"
import ProjectCard from "../components/project_card"
import HomePartner from "../components/home_partner"
import HomeSlideshowItem from "../components/home_slideshow_item"
import Layout from "../components/layout"

export default function Home() {
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
          <HomeSlideshowItem />
          <HomeSlideshowItem />
          <HomeSlideshowItem />
          <HomeSlideshowItem />
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
            <img src="/images/home_project_blank.jpg" width="100%" />
            <a href="/students-projects/">
              <div class="home-projects-more-text">
                <div>
                  <span>
                    More
                    <br />
                    Projects
                  </span>
                </div>
              </div>
            </a>
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
            <a href="http://www.mat.qmul.ac.uk/programmes/phd-programme/">
              <div class="home-programmes-info-block-frame block1">
                <span class="home-programmes-info-block">
                  <h1>PhD</h1>
                  <p>Find out more about our PhD Programme and APPLY HERE.</p>
                </span>
              </div>
            </a>
            <a href="http://www.mat.qmul.ac.uk/programmes/masters-programme/">
              <div class="home-programmes-info-block-frame block2">
                <span class="home-programmes-info-block">
                  <h1>Masters</h1>
                  <p>
                    Find out more about our Masters Programme and APPLY HERE.
                  </p>
                </span>
              </div>
            </a>
          </div>
        </div>
        <div id="home-news-bg">
          <div class="block" id="home-news">
            <h2>News</h2>
            <div id="home-news-articles">
              <HomeNewsItem />
              <HomeNewsItem />
              <HomeNewsItem />
            </div>
            <a href="/news/">
              <button>
                View All
                <p>
                  The latest News &amp;
                  <br />
                  Tweets from MAT
                </p>
              </button>
            </a>
          </div>
        </div>
        <div id="home-partners">
          <h2>Partners</h2>
          <p>Some of the organisations we work with:</p>
          <div id="home-partners-logos">
            <Slider {...partnersCarouselSettings}>
              <HomePartner />
              <HomePartner />
              <HomePartner />
              <HomePartner />
              <HomePartner />
              <HomePartner />
              <HomePartner />
              <HomePartner />
              <HomePartner />
            </Slider>
          </div>
          <a href="/partners/">
            <button>
              View All
              <p>
                The Organisations
                <br />
                we work with
              </p>
            </button>
          </a>
        </div>
      </div>
    </Layout>
  )
}
