import React from "react"

export default function HomeNewsItem() {
  return (
    <article>
      <div>
        <a
          href="https://twitter.com/QMUL_MAT/status/1375137510909751300"
          target="_blank"
        >
          <div
            style={{
              backgroundImage:
                "url(http://www.mat.qmul.ac.uk/wp-json/proxy/v1/https://pbs.twimg.com/profile_images/429960123725783041/mTKIDNRO.jpeg)",
              backgroundSize: "cover",
            }}
          >
            <img src="/wp-content/themes/mat/img/news_image.png" width="100%" />
          </div>
        </a>
        <hr />
        <p>
          RT @SophieSkach: Great dadaesque, fun and relaxing collaborative sound
          performance at the @QMUL_MAT @_intersections_ kick-off! Thanks @sam…{" "}
          <a
            href="https://twitter.com/QMUL_MAT/status/1375137510909751300"
            target="_blank"
          >
            Read more
          </a>
        </p>
      </div>
    </article>
  )
}
