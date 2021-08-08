import React from "react"
import { Link } from "gatsby"

const ArticleBlurb = ({ node: { id, fields, frontmatter, excerpt } }) => {
  return (
    <div
      className="my-4 bg-white rounded p-5 shadow-green transform transition duration-500 hover:scale-105 dark:text-black"
      key={id}
    >
      <Link to={fields.slug}>
        <div className="flex flex-wrap">
          <h3 className="text-lg font-semibold">{frontmatter.title}</h3>
          <span className="whitespace-pre font-light">
            {" "}
            — {frontmatter.date}
          </span>
          <span>: {frontmatter.status}</span>
        </div>
        <p className="text-gray-500">{excerpt}</p>
      </Link>
    </div>
  )
}

export default ArticleBlurb
