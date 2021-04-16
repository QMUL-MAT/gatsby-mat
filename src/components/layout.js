import React, { Component } from "react"
import Footer from "./footer"
import Head from "./head"

import NavBar from "./navbar"

export default function Layout(props) {
  const { brightNavbar = false } = props
  return (
    <div id="body-container">
      <Head></Head>
      <NavBar bright={brightNavbar}></NavBar>
      {props.children}
      <Footer></Footer>
    </div>
  )
}
