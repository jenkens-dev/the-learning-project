import React from "react"
import "./About.scss"
import { Link } from "gatsby"

export default function About() {
  return (
    <div className="aboutSection">
      <h2 className="firstLine">Hello and welcome to my digital garden! 👩‍🌾</h2>
      <p>
        My name is Jen Kennedy and I'm a Full-Stack developer. This digital
        garden is a place where I can take notes, share my thoughts about things
        I'm learning, and document my programming progress. The articles here
        are either finished (🌻), or in progress (🌱) and are being pruned and
        updated as I learn more. To read more about digital gardens check out my{" "}
        <Link to="/digital-garden">article</Link>!
      </p>
    </div>
  )
}
