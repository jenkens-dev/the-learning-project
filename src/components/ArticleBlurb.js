import React from "react"
import { Link } from "gatsby"

export default function ArticleBlurb({ node }) {
  return (
    <div key={node.id}>
      <Link to={node.fields.slug}>
        <div className="flex items-center">
          <h3 className="text-xl font-semibold">{node.frontmatter.title}</h3>
          <span> — {node.frontmatter.date}</span>
          <span>: {node.frontmatter.status}</span>
        </div>
        <p>{node.excerpt}</p>
      </Link>
    </div>
  )
}
