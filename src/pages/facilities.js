import React from "react"
import ContentPage from "../components/content_page"
import FacilityCard from "../components/facility_card"

export default function Facilities() {
  return (
    <ContentPage pageTitle="Facilities">
      <div class="columns is-multiline is-mobile">
        <FacilityCard />
        <FacilityCard />
        <FacilityCard />
        <FacilityCard />
        <FacilityCard />
      </div>
    </ContentPage>
  )
}
