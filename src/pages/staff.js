import React from "react"

import ContentPage from "../components/content_page"
import StaffCard from "../components/staff_card"

export default function Staff() {
  return <ContentPage pageTitle="Staff">
    <div class="columns is-mobile is-multiline">
      <StaffCard></StaffCard>
      <StaffCard></StaffCard>
      <StaffCard></StaffCard>
      <StaffCard></StaffCard>
      <StaffCard></StaffCard>
    </div>
  </ContentPage>
}
