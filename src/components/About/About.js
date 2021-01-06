import React from "react"
import "./About.scss"
import { Link } from "gatsby"

export default function About() {
  return (
    <div className="aboutSection">
      <h2 className="firstLine">
        Hello and welcome to my digital garden!{" "}
        <span role="img" aria-label="farmer">
          👩‍🌾
        </span>
      </h2>
      <p>
        My name is Jen Kennedy and I'm a frontend developer. This digital
        garden is a place where I can take notes, share what I'm learning, and document my programming progress. The articles here
        are either finished (
        <span role="img" aria-label="sunflower">
          🌻
        </span>
        ), or in progress (
        <span role="img" aria-label="farmer">
          👩‍🌾
        </span>
        ) and are being pruned and updated as I learn more! To read more about
        digital gardens check out my{" "}
        <Link to="/blog/digital-garden">article</Link>! And to learn more about me, feel free to read my article about my <Link to="/blog/my-journey-into-tech">journey into tech</Link>.
      </p>
    </div>
  )
}
