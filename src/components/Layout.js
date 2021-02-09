import React from "react"
import NavBar from "./NavBar"
import SEO from "./SEO"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex flex-col my-0 mx-auto max-w-4xl">
        <SEO />
        <NavBar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  )
}
