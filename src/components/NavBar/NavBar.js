import React from "react"
import "./NavBar.scss"
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
import { IconContext } from "react-icons"

export default function NavBar() {
  return (
    <nav>
      <ul className="menu">
        <li className="logo">
          <a>Home</a>
        </li>
        <div className="secondMenu">
          <li className="item">
            <a>All Posts</a>
          </li>
          <IconContext.Provider value={{ className: "icon" }}>
            <AiFillGithub />
            <AiOutlineTwitter />
          </IconContext.Provider>
        </div>
      </ul>
    </nav>
  )
}
