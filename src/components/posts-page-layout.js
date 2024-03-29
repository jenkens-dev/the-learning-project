import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import CodeBlock from "../components/CodeBlock"
import SEO from "../components/SEO"

const components = {
  code: CodeBlock,
  wrapper: props => (
    <div className="w-full">
      <main {...props} />
    </div>
  ),
}

const githubUrl =
  "https://github.com/jenkens-dev/the-learning-project/blob/master/content/posts/"

const PageTemplate = ({
  data: {
    mdx: { frontmatter, excerpt, slug, body },
  },
}) => {
  const tagline = frontmatter.tags.map(tag => `#${tag}`).join(" ")
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        tagline={tagline}
        description={excerpt}
        pathname={slug}
        article={true}
      />
      <div className="markdown flex flex-col items-center">
        <h1 className="text-3xl mt-6 font-semibold text-green-900 dark:text-green-400">
          {frontmatter.title}
        </h1>
        <div className="w-full flex flex-col items-end">
          <div>
            {frontmatter.tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="mr-2 text-gray-600 dark:text-gray-300"
                >
                  {tag}
                </span>
              )
            })}
          </div>
          <a className="block" href={`${githubUrl}${slug}.mdx`}>
            Edit
          </a>
        </div>
        <MDXProvider components={components}>
          <MDXRenderer className="flex flex-col">{body}</MDXRenderer>
        </MDXProvider>
        Enjoyed the article?
        <a
          href={`https://twitter.com/intent/tweet?text=${frontmatter.title}&url=https://www.jenkens.dev/blog/${slug}&via=jenkens_`}
          target="_blank"
          rel="noreferrer"
        >
          Share it on Twitter
        </a>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      slug
      excerpt
      frontmatter {
        title
        tags
      }
    }
  }
`

export default PageTemplate
