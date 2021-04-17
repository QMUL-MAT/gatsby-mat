import React from "react"
import ContentPage from "../components/content_page"
import PartnerCard from "../components/partner_card"

export default function Partners() {
  return (
    <ContentPage
      pageTitle="Partners we have worked with"
      header="/images/partners_header.jpg"
      grey={true}
    >
      <div class="columns is-multiline is-mobile">
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
      </div>
    </ContentPage>
  )
}
