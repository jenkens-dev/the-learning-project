import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import NavBar from "../components/NavBar/NavBar"

export default function Articles({ data }) {
  const [search, setSearch] = useState("")

  const handleChange = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  if (search.length > 0) {
    const filteredData = data.allMarkdownRemark.edges.filter(({ node }) => {
      return node.frontmatter.title.toLowerCase().includes(search.toLowerCase())
    })
    return (
      <div>
        <NavBar />
        <div className="blogPosts">
          <input
            className="searchBox"
            type="text"
            placeholder="Filter articles"
            value={search}
            onChange={handleChange}
          />
          {filteredData.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3 className="blogPostTitle">
                  {node.frontmatter.title}{" "}
                  <span>— {node.frontmatter.date}</span>
                  <span>: {node.frontmatter.status}</span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <NavBar />
      <div className="blogPosts">
        <input
          className="searchBox"
          type="text"
          placeholder="Filter articles"
          value={search}
          onChange={handleChange}
        />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3 className="blogPostTitle">
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
                <span>: {node.frontmatter.status}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            status
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
