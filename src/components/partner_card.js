import React from "react"

import * as CardStyle from "./card.module.css"

export default function PartnerCard() {
  return (
    <div className="column is-6-tablet is-3-desktop">
      <div className={CardStyle.card}>
        <img src="http://www.mat.qmul.ac.uk/wp-content/uploads/2016/11/mc-saatchi-logo.png" />
        <div className={CardStyle.content}>
          <p>
            M&C Saatchi is a major worldwide marking and PR agency with a large
            office based in London.
          </p>
          <a href="http://mcsaatchi.com/london/" target="_blank">
            Link to Partner website &gt;
          </a>
        </div>
      </div>
    </div>
  )
}
