import React from "react"
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"

export default function Footer() {
  return (
    <div className="absolute bottom-0 right-0 flex">
      <a href="https://github.com/Taljjaa">
        <AiFillGithub />
      </a>
      <a href="https://twitter.com/jenkens_">
        <AiOutlineTwitter />
      </a>
    </div>
  )
}
