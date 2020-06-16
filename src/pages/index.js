import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../index.scss"
import NavBar from "../components/NavBar/NavBar"
import About from "../components/About/About"

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <NavBar />
      <About />
      <div className="favoriteBlogs">
        <h3>My favorite posts</h3>
        <ul>
          <Link to="/beginners-guide-to-react-redux/">
            <li>Beginner's Guide to React Redux</li>
          </Link>
          <Link to="/react-redux-with-hooks/">
            <li>React Redux with Hooks</li>
          </Link>
          <Link to="/what-is-graphql/">
            <li>What is GraphQL?</li>
          </Link>
        </ul>
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
