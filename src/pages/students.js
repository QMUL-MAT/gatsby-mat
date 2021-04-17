import React from "react"

import ContentPage from "../components/content_page"
import StudentCard from "../components/student_card"

export default function Students() {
  return (
    <ContentPage pageTitle="Students" header="/images/students_header.jpg">
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
