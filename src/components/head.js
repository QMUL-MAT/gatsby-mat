import React from "react"
import { Helmet } from "react-helmet"

export default function Head() {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="HandheldFriendly" content="True" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="The Media and Arts Technology (MAT) programmes provide a bridge between academic research, digital technologies, and creative industries."
      />
      <meta name="keywords" content="media, arts, technology" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      />
      <title>Home | Media and Arts Technology</title>
    </Helmet>
  )
}
