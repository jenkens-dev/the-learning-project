import React from "react"
import { Link } from "gatsby"

const ArticleBlurb = ({ node }) => {
  return (
    <div
      className="my-4 bg-white rounded p-5 shadow-green transform transition duration-500 hover:scale-105 dark:text-black"
      key={node.id}
    >
      <Link to={node.fields.slug}>
        <div className="flex flex-wrap">
          <h3 className="text-lg font-semibold">{node.frontmatter.title}</h3>
          <span className="whitespace-pre font-light">
            {" "}
            — {node.frontmatter.date}
          </span>
          <span>: {node.frontmatter.status}</span>
        </div>
        <p className="text-gray-500">{node.excerpt}</p>
      </Link>
    </div>
  )
}

export default ArticleBlurb
