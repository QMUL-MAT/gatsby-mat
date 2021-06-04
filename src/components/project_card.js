import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as ProjectCardStyle from "./project_card.module.css"

export default function ProjectCard(props) {
  return (
    <div className={`${ProjectCardStyle.card}`}>
      <Link to={`/projects/${props.slug}`}>
        <GatsbyImage
          image={getImage(props.image)}
          className={`${ProjectCardStyle.image}`}
        />
        <span className={ProjectCardStyle.arrow}></span>
        <div className={`${ProjectCardStyle.cardContent}`}>
          <h2>
            {props.title} <i>{props.year}</i>
          </h2>

          {props.student ? (
            <p>
              <strong>Student: </strong>
              {props.student.frontmatter.name}
            </p>
          ) : (
            <></>
          )}
        </div>
      </Link>
    </div>
  )
}
