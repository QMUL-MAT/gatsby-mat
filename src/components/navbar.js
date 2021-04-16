import React, { Component } from "react"

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = { sit: false, navbarActive: false }
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
    if (window.screen.width > 680) {
      this.setState({ sit: window.scrollY > 100 })
    }
  }
  handleNavbarBurgerClick(event) {
    this.setState(state => ({ navbarActive: !state.navbarActive }))
  }
  render() {
    return (
      <>
        <div
          id="header"
          className={`header-home ${this.state.sit ? "sit" : ""}`}
        >
          <header
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <a href="/">
              <div id="logo" />
              <div id="logo-line"></div>
              <div id="logo-title"></div>
            </a>

            <a
              role="button"
              class={`navbar-burger ${
                this.state.navbarActive ? "is-active" : ""
              }`}
              aria-label="menu"
              aria-expanded="false"
              onClick={this.handleNavbarBurgerClick}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

            <nav
              className={`navbar-menu
                ${this.state.navbarActive ? "is-active" : ""}
                ${this.props.bright ? "bright" : ""}
              `}
            >
              <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable navbar-outer-item first-menu-item">
                  <a class="navbar-link is-arrowless" href="/programmes/">
                    Programmes
                  </a>
                  <div class="navbar-dropdown">
                    <a
                      class="navbar-item navbar-inner-item"
                      href="/programmes/phd-programme/"
                    >
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
                <a class="navbar-item navbar-outer-item" href="/projects/">
                  Projects
                </a>
                <div class="navbar-item has-dropdown is-hoverable navbar-outer-item">
                  <a class="navbar-link is-arrowless" href="/about/">
                    About
                  </a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item navbar-inner-item" href="/staff/">
                      Staff
                    </a>
                    <a class="navbar-item navbar-inner-item" href="/sponsors/">
                      Sponsors
                    </a>
                    <a
                      class="navbar-item navbar-inner-item"
                      href="/facilities/"
                    >
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
      </>
    )
  }
}
