import React from "react"

import * as HomeProjectStyle from "./home_project.module.css"

export default function HomeProject(props) {
  return (
    <a href={ props.to }>
      <div className={HomeProjectStyle.homeProjects}>
        <span>
          <img
            src={ props.img }
            width="100%"
          />
          <div>
            <span>
              <h2>
                { props.title } <i>{ props.year }</i>
              </h2>

              <p>
                <strong>Student: </strong>{ props.student }
              </p>
            </span>
          </div>
        </span>
      </div>
    </a>
  )
}
