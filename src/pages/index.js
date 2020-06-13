import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "../index.scss"
import NavBar from "../components/NavBar/NavBar"
import About from "../components/About/About"

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>The Learning Project</title>
          <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
        </Helmet>
      </div>
      <NavBar />
      <About />
      <div className="favoriteBlogs">
        <h3>My favorite posts</h3>
        <ul>
          <a href="/beginners-guide-to-react-redux/">
            <li>Beginner's Guide to React Redux</li>
          </a>
          <a href="/react-redux-with-hooks/">
            <li>React Redux with Hooks</li>
          </a>
          <a href="/what-is-graphql/">
            <li>What is GraphQL?</li>
          </a>
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
