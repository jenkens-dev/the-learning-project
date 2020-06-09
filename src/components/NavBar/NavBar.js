import React from "react"
import "./NavBar.scss"
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
import { IconContext } from "react-icons"

export default function NavBar() {
  return (
    <nav>
      <ul className="menu">
        <li className="logo navItem">
          <a>Home</a>
        </li>
        <div className="secondMenu">
          <li className="item navItem">
            <a>All Posts</a>
          </li>
          <IconContext.Provider value={{ className: "icon navItem" }}>
            <AiFillGithub />
            <AiOutlineTwitter />
          </IconContext.Provider>
        </div>
      </ul>
    </nav>
  )
}
