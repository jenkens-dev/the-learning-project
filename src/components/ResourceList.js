import React from "react"

const ResourceList = ({ topic, articles }) => {
  return (
    <>
      <h2 className="text-2xl text-green-900 dark:text-green-400">{topic}</h2>
      <ul className="inline-block list-disc list-inside">
        {articles.map((article, index) => {
          return (
            <li key={index}>
              <a className="linkUnderline" href={article.href}>
                {article.linkText}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ResourceList
