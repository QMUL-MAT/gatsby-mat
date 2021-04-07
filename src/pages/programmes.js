import React from "react"
import Layout from "../components/layout"

export default function Programmes() {
  return (
    <Layout>
      <div id="page-content">
        <div id="header-top">
          <h1>Programmes</h1>
        </div>
        <div id="programmes-home">
          <div id="programmes-home-section-block">
            <div class="programmes-home-section">
              <div class="programmes-home-frame">
                <a href="http://www.mat.qmul.ac.uk/programmes/phd-programme/">
                  <div class="programmes-home-block">
                    <span>
                      <img
                        src="http://www.mat.qmul.ac.uk/wp-content/uploads/2016/11/img_q3671.jpg"
                        width="100%"
                      />
                    </span>
                    <div>
                      <div class="programme-info">
                        <h2>PhD Programme</h2>
                        <p>
                          Find out more about our PhD Programme and APPLY HERE.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="programmes-home-section">
              <div class="programmes-home-frame">
                <a href="http://www.mat.qmul.ac.uk/programmes/masters-programme/">
                  <div class="programmes-home-block">
                    <span>
                      <img
                        src="http://www.mat.qmul.ac.uk/wp-content/uploads/2016/11/img_s2261.jpg"
                        width="100%"
                      />
                    </span>
                    <div>
                      <div class="programme-info">
                        <h2>Masters Programme</h2>
                        <p>
                          Find out more about our Masters Programme and APPLY
                          HERE.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div id="programmes-home-text-block">
            <div id="programmes-home-text">
              <div>
                <h3>PhD and Masters Programmes in Media and Arts Technology</h3>
                <p>
                  Our unique four year PhD programme and one year Masters by
                  Research in Media and Arts Technology are built around core
                  courses in advanced research methods, interaction design and
                  digital media processing, production and recording techniques
                  and optional specialist modules ranging from Digital Audio
                  Effects through Digital Rights Management to Interaction
                  Design.
                </p>
                <p>
                  Our mission is to produce post-graduates who combine
                  world-class technical and creative skills and who have a
                  unique vision of how digital technology transforms creative
                  possibilities and social economies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
