import React, { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import { HiMoon, HiSun } from "react-icons/hi"

const DarkModeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <HiSun
          onClick={() => setTheme("light")}
          className="text-gray-500 dark:text-yellow-300 text-2xl cursor-pointer"
        />
      ) : (
        <HiMoon
          onClick={() => setTheme("dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  )
}

export default DarkModeToggle
