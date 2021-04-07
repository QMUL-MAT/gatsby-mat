import React, { Component } from "react"
import { Helmet } from "react-helmet"

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.onScroll = this.onScroll.bind(this)
    this.handleNavbarBurgerClick = this.handleNavbarBurgerClick.bind(this)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false)
  }
  onScroll() {
    const header = document.body.querySelector("#header")
    if (window.screen.width > 680) {
      if (window.scrollY > 100) {
        header.classList.add("sit")
      } else {
        header.classList.remove("sit")
      }
    }
  }
  handleNavbarBurgerClick(event) {
    const burger = event.target
    const menu = document.getElementById("menu")
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    burger.classList.toggle("is-active")
    menu.classList.toggle("is-active")
  }
  render() {
    return (
      <>
        <Helmet>
          <meta charset="UTF-8" />
          <meta name="HandheldFriendly" content="True" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="The Media and Arts Technology (MAT) programmes provide a bridge between academic research, digital technologies, and creative industries."
          />
          <meta name="keywords" content="media, arts, technology" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          />
          <title>Home | Media and Arts Technology</title>
        </Helmet>
        <div id="header" class="header-home">
          <header class="navbar" role="navigation" aria-label="main navigation">
            <a href="/">
              <div id="logo" />
              <div id="logo-line"></div>
              <div id="logo-title"></div>
            </a>

            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              onClick={this.handleNavbarBurgerClick}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

            <nav id="menu" class="navbar-menu">
              <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable navbar-outer-item first-menu-item">
                  <a class="navbar-link is-arrowless" href="/programmes/">
                    Programmes
                  </a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item navbar-inner-item" href="/programmes/phd-programme/">
                      PhD Programme
                    </a>
                    <a
                      class="navbar-item navbar-inner-item"
                      href="/programmes/masters-programme/"
                    >
                      Masters Programme
                    </a>
                  </div>
                </div>
                <a class="navbar-item navbar-outer-item" href="/students/">
                  Students
                </a>
                <a class="navbar-item navbar-outer-item" href="/students-projects/">
                  Projects
                </a>
                <div class="navbar-item has-dropdown is-hoverable navbar-outer-item">
                  <a class="navbar-link is-arrowless" href="/about-us/">
                    About Us
                  </a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item navbar-inner-item" href="/staff/">
                      Staff
                    </a>
                    <a class="navbar-item navbar-inner-item" href="/sponsors/">
                      Sponsors
                    </a>
                    <a class="navbar-item navbar-inner-item" href="/facilities/">
                      Facilities
                    </a>
                  </div>
                </div>
                <a class="navbar-item navbar-outer-item" href="/partners/">
                  Partners
                </a>
                <a class="navbar-item navbar-outer-item" href="/mat-news/">
                  News
                </a>
                <a class="navbar-item navbar-outer-item" href="/contact/">
                  Contact
                </a>
              </div>
            </nav>
          </header>
        </div>
        {this.props.children}
        <footer>
          <div class="block">
            <div id="footer-address">
              <img src="/images/footer_logo.jpg" />
              <div>
                <strong>Media and Arts Technology CDT</strong>
                <br />
                School of Electronic Engineering and Computer Science
                <br />
                Queen Mary University of London.
                <br />
                Room Eng. 102
                <br />
                Engineering Building
                <br />
                London, E1 4NS
              </div>
            </div>
            <div id="footer-contact">
              <div class="footer-block">
                <p>
                  <strong>General Enquiries:</strong>
                </p>
                <p>Tel: +44 (0)20 7882 5200</p>
                <p>
                  <a href="mailto:mat-enquiries@qmul.ac.uk">
                    Email: mat-enquiries@qmul.ac.uk
                  </a>
                </p>
              </div>
            </div>
            <div id="footer-queen-mary">
              <div class="footer-block">
                <img src="/images/footer_queen_mary.jpg" />
                <p>Funded by EPSRC &amp; AHRC</p>
                <p>Hosted by Dept of EECS</p>
                <p>Part of QMUL</p>
              </div>
            </div>
            <div id="footer-nick-watts">
              <div class="footer-block">
                <p>Website design:</p>
                <img src="/images/footer_nick_watts.jpg" />
                <p>
                  <a href="http://www.nickwattsdesign.co.uk" target="_blank">
                    Nick Watts Design
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
}
