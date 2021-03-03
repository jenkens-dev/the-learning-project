import React from "react"
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
import { IconContext } from "react-icons"

const Footer = () => {
  return (
    <div className="flex flex-shrink-0 py-3">
      <IconContext.Provider
        value={{ className: "w-7 h-7 text-githubGray dark:text-white" }}
      >
        <a href="https://github.com/Taljjaa">
          <AiFillGithub aria-hidden="true" />
          <span class="sr-only">Github</span>
        </a>
      </IconContext.Provider>
      <IconContext.Provider
        value={{ className: "ml-2 w-7 h-7 text-twitterBlue" }}
      >
        <a href="https://twitter.com/jenkens_">
          <AiOutlineTwitter aria-hidden="true" />
          <span class="sr-only">Twitter</span>
        </a>
      </IconContext.Provider>
    </div>
  )
}

export default Footer
