import React, { Component } from "react"
import Footer from "./footer"
import Head from "./head"

import NavBar from "./navbar"

export default function Layout(props) {
  return (
    <div id="body-container">
      <Head></Head>
      <NavBar></NavBar>
      {props.children}
      <Footer></Footer>
    </div>
  )
}
