import React from "react"
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
import { IconContext } from "react-icons"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <div>
          <li>
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
