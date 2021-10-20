import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const ResourcesPage = () => {
  return (
    <Layout>
      <SEO title="Resources" tagline="A collection of my favorite resources" />
      <h1 className="text-3xl mb-5 text-green-900 dark:text-green-400">
        Resources
      </h1>
      <h2 className="text-2xl mb-5 text-green-900 dark:text-green-400">
        React
      </h2>
      <ul className="inline-block list-disc list-inside">
        <li>
          <a
            className="linkUnderline"
            href="https://kyleshevlin.com/comparing-use-ref-and-use-state"
          >
            Comparing `useRef` and `useState` by Kyle Shevlin
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default ResourcesPage
