import React from "react"
import { Link } from "gatsby"
import "../index.scss"
import About from "../components/About/About"
import Layout from "../components/Layout"

const BlogIndex = () => {
  return (
    <Layout>
      <About />
      <div className="favoriteBlogs">
        <h3>My favorite posts</h3>
        <ul>
          <Link to="/blog/beginners-guide-to-react-redux/">
            <li>Beginner's Guide to React Redux</li>
          </Link>

          <Link to="/blog/react-redux-with-hooks/">
            <li>React Redux with Hooks</li>
          </Link>

          <Link to="/blog/what-is-graphql/">
            <li>What is GraphQL?</li>
          </Link>
        </ul>
      </div>
    </Layout>
  )
}

export default BlogIndex
