import React from "react"

import ContentPage from "../components/content_page"
import ProjectCard from "../components/project_card"
import * as ProjectsStyle from "./projects.module.css"

export default function Projects() {
  return (
    <ContentPage pageTitle="Projects" headerClass={ProjectsStyle.header}>
      <div className="columns is-mobile is-multiline">
        <ProjectCard
          title="MouldCraft"
          year="2019"
          student="Raphael Kim"
          url="/projects/mouldcraft/"
          img="http://www.mat.qmul.ac.uk/wp-content/uploads/2019/03/IMG_8430-800x450.jpg"
        />
        <ProjectCard
          title="MouldCraft"
          year="2019"
          student="Raphael Kim"
          url="/projects/mouldcraft/"
          img="http://www.mat.qmul.ac.uk/wp-content/uploads/2019/03/IMG_8430-800x450.jpg"
        />
        <ProjectCard
          title="MouldCraft"
          year="2019"
          student="Raphael Kim"
          url="/projects/mouldcraft/"
          img="http://www.mat.qmul.ac.uk/wp-content/uploads/2019/03/IMG_8430-800x450.jpg"
        />
        <ProjectCard
          title="MouldCraft"
          year="2019"
          student="Raphael Kim"
          url="/projects/mouldcraft/"
          img="http://www.mat.qmul.ac.uk/wp-content/uploads/2019/03/IMG_8430-800x450.jpg"
        />
        <ProjectCard
          title="MouldCraft"
          year="2019"
          student="Raphael Kim"
          url="/projects/mouldcraft/"
          img="http://www.mat.qmul.ac.uk/wp-content/uploads/2019/03/IMG_8430-800x450.jpg"
        />
      </div>
    </ContentPage>
  )
}
