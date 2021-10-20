import React from "react"
import DarkModeToggle from "./DarkModeToggle"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between pt-2 pb-6 text-xl">
      <div>
        <Link className="text-green-900 dark:text-green-400" to="/">
          Home
        </Link>
      </div>
      <div className="flex items-center">
        <DarkModeToggle />
        <Link
          className="ml-4 text-green-900 dark:text-green-400"
          to="/articles"
        >
          All Posts
        </Link>
        <Link
          className="ml-4 text-green-900 dark:text-green-400"
          to="/resources"
        >
          Resources
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
