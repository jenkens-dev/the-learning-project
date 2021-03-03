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
        <h2 className="text-2xl mb-5 text-green-900 dark:text-green-400">
          My favorite posts
        </h2>
        <ul className="inline-block list-disc list-inside">
          <li>
            <Link
              className="linkUnderline"
              to="/blog/beginners-guide-to-react-redux/"
            >
              Beginner's Guide to React Redux
            </Link>
          </li>
          <li>
            <Link className="linkUnderline" to="/blog/react-redux-with-hooks/">
              React Redux with Hooks
            </Link>
          </li>
          <li>
            <Link className="linkUnderline" to="/blog/what-is-graphql/">
              What is GraphQL?
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default BlogIndex
