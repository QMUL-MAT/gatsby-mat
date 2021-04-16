import React from "react"

import * as FacilityCardStyle from "./facility_card.module.css"

export default function FacilityCard() {
  return (
    <div className="column is-6-tablet is-12-mobile">
      <div className={FacilityCardStyle.card}>
        <img src="http://www.mat.qmul.ac.uk/wp-content/uploads/2019/01/445_QMUL-Engineerinvg_Materials-Workshop_03.jpg" />
        <div className={FacilityCardStyle.content}>
          <h3>MAT Workshop</h3>
          <p>
            Physical computing plays a big part in the Media and Arts Technology
            programme. The MAT Workshop was established by MAT PhD students and
            is now a fully functional place to develop prototypes with physical
            materials. Students have access to a range of manual and power
            tools, as well as soldering stations and electronics components. Our
            most used items of equipment are the two lasercutters, both a 60
            Watt and a high powered 150 Watt machine.
          </p>
          <p>
            MAT students have 24 hour access to the workshop which is a messy
            environment where wood, acrylic, textiles, electronics and other
            materials come together to create designs, products and innovations
            of the future.
          </p>
        </div>
      </div>
    </div>
  )
}
