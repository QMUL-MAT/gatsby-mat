import React from "react"

export default function Footer() {
  return (
    <footer>
      <div class="block">
        <div id="footer-address">
          <img src="/images/footer_logo.jpg" alt="MAT logo" />
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
            <img src="/images/footer_queen_mary.jpg" alt="QMUL ogo" />
            <p>Funded by EPSRC &amp; AHRC</p>
            <p>Hosted by Dept of EECS</p>
            <p>Part of QMUL</p>
          </div>
        </div>
        <div id="footer-nick-watts">
          <div class="footer-block">
            <p>Website design:</p>
            <img src="/images/footer_nick_watts.jpg" alt="Nick Watts Design logo" />
            <p>
              <a href="http://www.nickwattsdesign.co.uk" target="_blank" rel="noreferrer">
                Nick Watts Design
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
