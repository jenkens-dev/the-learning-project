import React from "react"
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
import { IconContext } from "react-icons"

export default function Footer() {
  return (
    <div className="flex flex-shrink-0 py-6">
      <IconContext.Provider value={{ className: "w-7 h-7" }}>
        <a href="https://github.com/Taljjaa">
          <AiFillGithub />
        </a>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "w-7 h-7" }}>
        <a href="https://twitter.com/jenkens_">
          <AiOutlineTwitter />
        </a>
      </IconContext.Provider>
    </div>
  )
}
