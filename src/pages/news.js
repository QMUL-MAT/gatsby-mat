import React from "react"
import ContentPage from "../components/content_page"

import * as NewsStyle from "./news.module.css"

export default function News() {
  return (
    <ContentPage pageTitle="News" grey={true} headerClass={NewsStyle.header}>

    </ContentPage>
  )
}