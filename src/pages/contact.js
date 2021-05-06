import React from "react"
import {Link} from "gatsby"

import ContentPage from "../components/content_page"

export default function Contact() {
  return (
    <ContentPage pageTitle="Contact" header="/images/contact_header.jpg">
      <div class="columns">
        <div class="column is-two-thirds text-content">
          <h2>Postal address</h2>
          <p>
            Media and Arts Technology
            <br />
            School of Electronic Engineering and Computer Science
            <br />
            Queen Mary University of London
            <br />
            London E1 4NS
          </p>
          <h2>General enquiries</h2>
          <p>
            Tel: +44 (0)20 7882 5200
            <br />
            Fax: +44 (0)20 8980 6533
            <br />
            Please email the relevant person on <Link to="/programmes/">MAT Programme</Link> application pages.
          </p>
          <h2>Public Transport</h2>
          <p>
            The Mile End campus is well-served by public transport and is a
            short walk from either Mile End or Stepney Green tube station.
          </p>
          <p>
            By tube take the Central Line to Mile End station and walk westwards
            along Mile End Road (towards the City) or take the District Line or
            the Hammersmith &amp; City Line to Stepney Green station and turn
            left as you come out of the station heading eastwards along Mile End
            Road.
          </p>
          <p>
            By bus take the number 25 (Oxford Circus to Ilford) and get off near
            Bancroft Road. There are a number of other services stopping within
            five minutes’ walk of the site, including the 277 (Highbury and
            Islington to Canary Wharf) and Docklands services. For DLR and other
            travel information, please refer to the main College website.
          </p>
        </div>
        <div class="column">
          <img src="http://www.mat.qmul.ac.uk/wp-content/uploads/2016/11/contact_feature.jpg" alt="" />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9929.842169290736!2d-0.0434591!3d51.5231123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc748e02e1d819963!2sSchool+of+Electronic+Engineering+and+Computer+Science!5e0!3m2!1sen!2suk!4v1478296409783"
            allowfullscreen=""
            width="100%"
            height="450"
            frameborder="0"
            title="Map"
          ></iframe>
        </div>
      </div>
    </ContentPage>
  )
}
