import React, { Component } from "react"
import { Link } from "gatsby"

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
            <Link to="/">
              <div id="logo" />
              <div id="logo-line"></div>
              <div id="logo-title"></div>
            </Link>

            <span
              role="button"
              className={`navbar-burger ${
                this.state.navbarActive ? "is-active" : ""
              }`}
              aria-label="menu"
              aria-expanded="false"
              onKeyDown={this.handleNavbarBurgerClick}
              onClick={this.handleNavbarBurgerClick}
              tabIndex={0}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>

            <nav
              className={`navbar-menu
                ${this.state.navbarActive ? "is-active" : ""}
                ${this.props.bright ? "bright" : ""}
              `}
            >
              <div className="navbar-start">
                <div className="navbar-item has-dropdown is-hoverable navbar-outer-item first-menu-item">
                  <Link to="/programmes/" className="navbar-link is-arrowless">
                    Programmes
                  </Link>
                  <div className="navbar-dropdown">
                    <Link
                      className="navbar-item navbar-inner-item"
                      to="/programmes/phd-programme/"
                    >
                      PhD Programme
                    </Link>
                    <Link
                      className="navbar-item navbar-inner-item"
                      to="/programmes/masters-programme/"
                    >
                      Masters Programme
                    </Link>
                  </div>
                </div>
                <Link className="navbar-item navbar-outer-item" to="/students/">
                  Students
                </Link>
                <Link className="navbar-item navbar-outer-item" to="/projects/">
                  Projects
                </Link>
                <div className="navbar-item has-dropdown is-hoverable navbar-outer-item">
                  <Link className="navbar-link is-arrowless" to="/about/">
                    About
                  </Link>
                  <div className="navbar-dropdown">
                    <Link className="navbar-item navbar-inner-item" to="/staff/">
                      Staff
                    </Link>
                    <Link className="navbar-item navbar-inner-item" to="/sponsors/">
                      Sponsors
                    </Link>
                    <Link
                      className="navbar-item navbar-inner-item"
                      to="/facilities/"
                    >
                      Facilities
                    </Link>
                  </div>
                </div>
                <Link className="navbar-item navbar-outer-item" to="/partners/">
                  Partners
                </Link>
              </div>
            </nav>
          </header>
        </div>
      </>
    )
  }
}
