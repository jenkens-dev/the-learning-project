import React from "react"
import { graphql, Link } from "gatsby"
import "../index.scss"
import About from "../components/About/About"
import Layout from "../components/Layout"

export default function Home({ data }) {
  return (
    <Layout>
      <About />
      <div className="favoriteBlogs">
        <h3>My favorite posts</h3>
        <ul>
          <Link to="/articles/beginners-guide-to-react-redux/">
            <li>Beginner's Guide to React Redux</li>
          </Link>
          <Link to="/articles/react-redux-with-hooks/">
            <li>React Redux with Hooks</li>
          </Link>
          <Link to="/articles/what-is-graphql/">
            <li>What is GraphQL?</li>
          </Link>
        </ul>
      </div>
    </Layout>
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
