import React from "react"
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
import { IconContext } from "react-icons"

export default function Footer() {
    return (
        <IconContext.Provider value={{ className: "icon navItem" }}>
            <a href="https://github.com/Taljjaa">
              <AiFillGithub />
            </a>
            <a href="https://twitter.com/jenkens_">
              <AiOutlineTwitter />
            </a>
          </IconContext.Provider>
    )
}