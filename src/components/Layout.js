import React from "react"
import NavBar from "./NavBar"
import SEO from "./SEO"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col my-0 mx-auto max-w-5xl">
      <SEO />
      <NavBar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  )
}
