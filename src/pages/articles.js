import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ArticleBlurb from "../components/ArticleBlurb"

export default function Articles({ data }) {
  const [search, setSearch] = useState("")

  const handleChange = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  if (search.length > 0) {
    const filteredData = data.allMdx.edges.filter(({ node }) => {
      return node.frontmatter.title.toLowerCase().includes(search.toLowerCase())
    })
    return (
      <Layout>
        <div>
          <div className="max-w-lg bg-white shadow p-2 mb-8 mx-auto">
            <input
              type="text"
              placeholder="Search articles"
              value={search}
              onChange={handleChange}
              className="w-full rounded p-2 placeholder-gray-500"
            />
          </div>
          {filteredData.map(({ node }) => (
            <ArticleBlurb node={node} key={node.id} />
          ))}
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div>
        <div className="max-w-lg bg-white shadow p-2 mb-8 mx-auto">
          <input
            type="text"
            placeholder="Search articles"
            value={search}
            onChange={handleChange}
            className="w-full rounded p-2 placeholder-gray-500"
          />
        </div>
        {data.allMdx.edges.map(({ node }) => (
          <ArticleBlurb node={node} key={node.id} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            status
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
