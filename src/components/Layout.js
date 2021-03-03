import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ThemeProvider from "./ThemeContext"

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <div className="bg-green-50 dark:bg-black min-h-screen">
        <div className="flex flex-col min-h-screen mx-8">
          <NavBar />
          <div className="flex-grow max-w-xs mx-auto my-0 sm:max-w-3xl dark:text-white">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}
