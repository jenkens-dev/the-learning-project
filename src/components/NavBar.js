import React from "react"
import DarkModeToggle from "./DarkModeToggle"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between py-6 text-xl">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="flex items-center">
        <DarkModeToggle />
        <Link className="ml-4" to="/articles">
          All Posts
        </Link>
      </div>
    </nav>
  )
}
