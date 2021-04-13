import React from "react"

import ContentPage from "../components/content_page"
import StudentCard from "../components/student_card"
import * as StudentsStyle from "./students.module.css"

export default function Students() {
  return (
    <ContentPage pageTitle="Students" headerClass={StudentsStyle.header}>
      <div class="columns is-multiline is-mobile">
        <StudentCard></StudentCard>
        <StudentCard></StudentCard>
        <StudentCard></StudentCard>
        <StudentCard></StudentCard>
        <StudentCard></StudentCard>
        <StudentCard></StudentCard>
      </div>
    </ContentPage>
  )
}
