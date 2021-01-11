import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

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
          <input
            type="text"
            placeholder="Filter articles"
            value={search}
            onChange={handleChange}
          />
          {filteredData.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>— {node.frontmatter.date}</span>
                  <span>: {node.frontmatter.status}</span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div>
        <input
          type="text"
          placeholder="Filter articles"
          value={search}
          onChange={handleChange}
        />
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
                <span>: {node.frontmatter.status}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
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
