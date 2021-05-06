import React from "react"
import {Link} from "gatsby"

import ContentPage from "../components/content_page"
import * as AboutStyle from "./about.module.css"

export default function About() {
  const links = ["staff", "sponsors", "facilities"]
  return (
    <ContentPage pageTitle="About us" header="/images/about_header.jpg">
      <div class="columns">
        {links.map(link => (
          <div class="column">
            <div className={AboutStyle.card}>
              <Link to={`/${link}/`}>
                <span className={AboutStyle.arrow}></span>
                <img src={`/images/about_${link}.jpg`} alt={`${link}`} />
                <h2>{link}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div class="columns">
        <div class="column is-two-thirds text-content">
          <h4>
            The Media and Arts Technology (MAT) programmes provide a bridge
            between academic research, digital technologies, and creative
            industries. We offer innovative inter-disciplinary programmes in the
            sciences and technologies that transform the creative sector, with a
            special focus on Sound, Music, Media, and Interaction.
          </h4>
          <p>
            We aim to produce an elite community of graduates who are excellent
            in technical and scientific research, creativity, building and using
            software and hardware, and are prepared to contribute to the world’s
            Digital Economy.
          </p>
          <p>
            Our programme is part of a £250 million strategic government
            initiative, and is exceptionally well resourced. The MAT Studios
            include a dedicated Listening Room and audio Control Room complete
            with 3D positional audio capture and playback and a great range of
            professional audio equipment and musical instruments, and the
            Performance Lab complete with Vicon real-time motion capture system
            and integrated lighting DMX system. MAT researchers have access to
            the full range QMUL\’s state-of-the art research and performance
            facilities including the Augmented Human Interaction Laboratory and
            the Pinter Studio Theatre.
          </p>
          <p>
            The MAT programmes link to many strands of research both within and
            outside the university, with strong ties to the School of Electronic
            Engineering, School of Business and Management, School of Geography
            and the Drama and Film departments. Being part of Queen Mary
            University of London also means we naturally collaborate with the
            larger University of London network and UK academic networks. Queen
            Mary University of London is also part of the Russell group, making
            it one of the top class research institutions in the UK.
          </p>
        </div>
        <div class="column is-one-third is-flex has-text-centered">
          <div className={AboutStyle.infoBox}>
            <h1>Inter-disciplinary research</h1>
          </div>
        </div>
      </div>
    </ContentPage>
  )
}
