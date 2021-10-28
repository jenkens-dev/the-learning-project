import React from "react"

const ResourceList = ({ resource: { href, linkText, topic } }) => {
  return (
    <>
      <h2 className="text-2xl text-green-900 dark:text-green-400">{topic}</h2>
      <ul className="inline-block list-disc list-inside">
        <li>
          <a className="linkUnderline" href={href}>
            {linkText}
          </a>
        </li>
      </ul>
    </>
  )
}

export default ResourceList
