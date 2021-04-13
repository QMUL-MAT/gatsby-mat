import React from "react"

import * as StudentCardStyle from "./student_card.module.css"

export default function StudentCard() {
  return (
    <div className={`column is-half-mobile is-one-quarter-tablet is-2-desktop ${ StudentCardStyle.card }`}>
      <div class={ StudentCardStyle.hover }></div>
      <a href="/students/yannfranchi/">
        <img src="http://www.mat.qmul.ac.uk/wp-content/uploads/2021/03/1540923531629-Yann-FRACHI-1.jpg" />
        <div>
          <h3>Yann Frachi</h3>
          <p>
            <em>
              <strong>Course:</strong> MAT PhD
            </em>
          </p>
          <p>
            <em>
              <strong>Year:</strong> 2020
            </em>
          </p>
        </div>
      </a>
    </div>
  )
}
