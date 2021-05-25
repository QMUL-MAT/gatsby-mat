import React from "react"

import * as VideoStyle from "./video.module.css"

export default function Video({title, provider, id, ...props}) {
  var src
  if (provider === 'youtube') {
    src = `https://www.youtube.com/embed/${id}`
  } else if (provider === 'vimeo') {
    src = `https://player.vimeo.com/video/${id}`
  }
  return (
    <div className={VideoStyle.video}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  )
}
