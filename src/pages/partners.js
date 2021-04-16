import React from "react"
import ContentPage from "../components/content_page"
import PartnerCard from "../components/partner_card"

import * as PartnersStyle from "./partners.module.css"

export default function Partners() {
  return (
    <ContentPage
      pageTitle="Partners we have worked with"
      headerClass={PartnersStyle.header}
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
