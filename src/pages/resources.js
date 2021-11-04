import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ResourceList from "../components/ResourceList"

const ReactResources = {
  topic: "React",
  articles: [
    {
      href: "https://kyleshevlin.com/comparing-use-ref-and-use-state",
      linkText: "Comparing `useRef` and `useState` by Kyle Shevlin",
    },
  ],
}

const TypeScriptResources = {
  topic: "TypeScript",
  articles: [
    {
      href:
        "https://egghead.io/lessons/react-write-your-first-react-typescript-component",
      linkText: "Write your first React TypeScript Component by Shawn Wang",
    },
    {
      href: "https://kentcdodds.com/blog/typescript-function-syntaxes",
      linkText: "TypeScript Function Syntaxes by Kent C. Dodds",
    },
  ],
}

const SystemDesignResources = {
  topic: "System Design",
  articles: [
    {
      href: "https://github.com/donnemartin/system-design-primer",
      linkText: "The System Design Primer",
    },
  ],
}

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
      <ResourceList
        topic={ReactResources.topic}
        articles={ReactResources.articles}
      />
      <ResourceList
        topic={TypeScriptResources.topic}
        articles={TypeScriptResources.articles}
      />
      <ResourceList
        topic={SystemDesignResources.topic}
        articles={SystemDesignResources.articles}
      />
    </Layout>
  )
}

export default ResourcesPage
