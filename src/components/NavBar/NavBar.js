import React from "react"
import "./NavBar.scss"
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
import { IconContext } from "react-icons"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <nav>
      <ul className="menu">
        <li className="logo navItem">
          <Link to="/">Home</Link>
        </li>
        <div className="secondMenu">
          <li className="item navItem">
            <Link to="/articles">All Posts</Link>
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
