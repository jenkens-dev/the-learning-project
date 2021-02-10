import React from "react"
import NavBar from "./NavBar"
import SEO from "./SEO"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="bg-green-50 min-h-screen">
      <div className="max-w-6xl flex flex-col my-0 mx-auto min-h-screen">
        <SEO />
        <NavBar />
        <div className="my-0 mx-auto max-w-3xl flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  )
}
