import React from "react"
import "./NavBar.scss"
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
import { IconContext } from "react-icons"

export default function NavBar() {
  return (
    <nav>
      <ul className="menu">
        <li className="logo navItem">
          <a href="/">Home</a>
        </li>
        <div className="secondMenu">
          <li className="item navItem">
            <a href="/articles">All Posts</a>
          </li>
          <IconContext.Provider value={{ className: "icon navItem" }}>
            <a href="https://github.com/Taljjaa">
              <AiFillGithub />
            </a>
            <a href="https://twitter.com/jenkens_">
              <AiOutlineTwitter />
            </a>
          </IconContext.Provider>
        </div>
      </ul>
    </nav>
  )
}
