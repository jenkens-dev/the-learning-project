import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ResourceList from "../components/ResourceList"
import {
  ReactResources,
  TypeScriptResources,
  SystemDesignResources,
} from "../articleResources"

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
