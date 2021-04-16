import React from "react"

import * as StaffCardStyle from "./staff_card.module.css"

export default function StudentCard() {
  return (
    <div className="column is-12-mobile is-6-tablet is-4-desktop is-3-fullhd">
      <div class={StaffCardStyle.card}>
        <img src="http://www.mat.qmul.ac.uk/wp-content/uploads/2016/11/Andrew.png" />
        <div class={StaffCardStyle.content}>
          <div class="text-content">
            <p class={StaffCardStyle.intro}>
              <h3>Dr. Andrew McPherson</h3>
              <i>Head of MAT 1st Year Curriculum</i>
            </p>
            <div class={StaffCardStyle.bio}>
              <div>
                <h3>Dr. Andrew McPherson</h3>
                <i>Head of MAT 1st Year Curriculum</i>
              </div>
              <p>
              Andrew McPherson is a Reader in the Centre for Digital Music and
              leads the Augmented Instruments Laboratory focusing on
              electronically-extended musical instruments and real-time audio
              processing. Andrew oversees the MAT first-year taught curriculum
              and co-teaches the Interactive Digital Multimedia Techniques
              module.
              </p>
              <a target="_blank" href="http://www.eecs.qmul.ac.uk/~andrewm/">Andrew's website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
