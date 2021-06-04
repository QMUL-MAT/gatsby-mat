import { Link } from "gatsby"
import React from "react"

import ContentPage from "../components/content_page"

export default function Redirect({ pageContext }) {
  const { to } = pageContext
  return (
    <ContentPage pageTitle="Page has been moved" grey={true} redirect={ to }>
      <p>It's now <Link to={ to }>here</Link>.</p>
    </ContentPage>
  )
}