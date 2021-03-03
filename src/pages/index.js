import React from "react"
import About from "../components/About"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const BlogIndex = () => {
  return (
    <Layout>
      <SEO />
      <About />
      <div>
        <h3 className="text-2xl mb-5 text-green-900 dark:text-green-400">
          My favorite posts
        </h3>
        <ul className="inline-block list-disc list-inside">
          <Link
            className="linkUnderline"
            to="/blog/beginners-guide-to-react-redux/"
          >
            <li>Beginner's Guide to React Redux</li>
          </Link>

          <Link className="linkUnderline" to="/blog/react-redux-with-hooks/">
            <li>React Redux with Hooks</li>
          </Link>

          <Link className="linkUnderline" to="/blog/what-is-graphql/">
            <li>What is GraphQL?</li>
          </Link>
        </ul>
      </div>
    </Layout>
  )
}

export default BlogIndex
