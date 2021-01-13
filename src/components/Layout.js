import React from "react"
import NavBar from "./NavBar"
import SEO from "./SEO"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="my-0 mx-auto max-w-5xl">
      <SEO />
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
