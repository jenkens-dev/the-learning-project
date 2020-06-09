import React from "react"
import { graphql, Link } from "gatsby"
import "../index.scss"
import NavBar from "../components/NavBar/NavBar"

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <NavBar />
      <div className="blogPosts">
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
