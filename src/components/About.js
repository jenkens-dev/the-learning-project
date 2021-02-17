import React from "react"
import { Link } from "gatsby"

export default function About() {
  return (
    <>
      <h1 className="text-3xl mb-5 text-green-900">
        Hello and welcome to my digital garden!{" "}
        <span role="img" aria-label="farmer emoji">
          👩‍🌾
        </span>
      </h1>
      <p className="mb-5">
        My name is Jen Kennedy and I'm a frontend developer. I currently live in
        Seattle, WA 🌲! I love frontend development and enjoy working on
        products and making designs and features come to life. Some of my
        favorite technologies are React, TypeScript, GraphQL, and Redux. I also
        enjoy leveling up my skills in CSS and testing. When I'm not programming
        I enjoy playing with my dog, reading manga, teaching myself Japanese,
        and playing videogames. And to learn more about me, feel free to read my
        article about my{" "}
        <Link to="/blog/my-journey-into-tech">journey into tech</Link>.
      </p>
      <p className="mb-5">
        This digital garden is a place where I can take notes, share what I'm
        learning, and document my programming progress. The articles here are
        either finished (
        <span role="img" aria-label="sunflower emoji">
          🌻
        </span>
        ), or in progress (
        <span role="img" aria-label="farmer emoji">
          👩‍🌾
        </span>
        ) and are being pruned and updated as I learn more! To read more about
        digital gardens check out my{" "}
        <Link className="linkUnderline" to="/blog/digital-garden">
          article
        </Link>
        !
      </p>
    </>
  )
}
