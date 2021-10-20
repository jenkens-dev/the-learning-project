import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const ResourcesPage = () => {
  return (
    <Layout>
      <SEO title="Resources" tagline="A collection of my favorite resources" />
      <h1 className="text-3xl text-green-900 dark:text-green-400">Resources</h1>
      <p>
        Throughout my coding journey I've come across a lot of great resources.
        They end up saved in so many different spots that it's hard to find them
        again if I want to share them with others. Thus I've created this little
        directory. I've personally read/watched all these resources if that
        matters to you!
      </p>
      <h2 className="text-2xl text-green-900 dark:text-green-400">React</h2>
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

      <h2 className="text-2xl text-green-900 dark:text-green-400">
        TypeScript
      </h2>
      <ul className="inline-block list-disc list-inside">
        <li>
          <a
            className="linkUnderline"
            href="https://egghead.io/lessons/react-write-your-first-react-typescript-component"
          >
            Write your first React TypeScript Component by Shawn Wang
          </a>
        </li>
        <li>
          <a
            className="linkUnderline"
            href="https://kentcdodds.com/blog/typescript-function-syntaxes"
          >
            TypeScript Function Syntaxes by Kent C. Dodds
          </a>
        </li>
      </ul>
      <h2 className="text-2xl text-green-900 dark:text-green-400">
        System Design
      </h2>
      <ul className="inline-block list-disc list-inside">
        <li>
          <a
            className="linkUnderline"
            href="https://github.com/donnemartin/system-design-primer"
          >
            The System Design Primer
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default ResourcesPage
