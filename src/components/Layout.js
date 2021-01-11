import React from "react"
import NavBar from "./NavBar"
import SEO from "./SEO"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
