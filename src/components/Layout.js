import React from "react"
import NavBar from "./NavBar/NavBar"
import SEO from "./SEO"

export default function Layout({ children }) {
  return (
    <div>
      <SEO />
      <NavBar />
      {children}
    </div>
  )
}
