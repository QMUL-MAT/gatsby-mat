import React from "react"

import ContentPage from "../components/content_page"
import * as ProgrammesStyle from "./programmes.module.css"

export default function Programmes() {
  return (
    <ContentPage pageTitle="Programmes" header="/images/programmes_header.jpg">
      <div class="columns is-multiline is-mobile">
        <div class="column is-half-mobile is-half-tablet is-one-quarter-desktop">
          <a href="/programmes/phd-programme/">
            <div className={ProgrammesStyle.frame}>
              <span>
                <img src="/images/phd_programme_frame.jpg" />
              </span>
              <div>
                <div className={ProgrammesStyle.info}>
                  <h2>PhD Programme</h2>
                  <p>Find out more about our PhD Programme and APPLY HERE.</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-half-mobile is-half-tablet is-one-quarter-desktop">
          <a href="/programmes/masters-programme/">
            <div className={ProgrammesStyle.frame}>
              <span>
                <img src="/images/masters_programme_frame.jpg" />
              </span>
              <div>
                <div className={ProgrammesStyle.info}>
                  <h2>Masters Programme</h2>
                  <p>
                    Find out more about our Masters Programme and APPLY HERE.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="column text-content">
          <h2>PhD and Masters Programmes in Media and Arts Technology</h2>
          <p>
            Our unique four year PhD programme and one year Masters by Research
            in Media and Arts Technology are built around core courses in
            advanced research methods, interaction design and digital media
            processing, production and recording techniques and optional
            specialist modules ranging from Digital Audio Effects through
            Digital Rights Management to Interaction Design.
          </p>
          <p>
            Our mission is to produce post-graduates who combine world-class
            technical and creative skills and who have a unique vision of how
            digital technology transforms creative possibilities and social
            economies.
          </p>
        </div>
      </div>
    </ContentPage>
  )
}
