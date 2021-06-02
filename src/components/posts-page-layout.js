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
    <div>
      <main {...props} />
    </div>
  ),
}

const PageTemplate = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.excerpt}
        pathname={mdx.slug}
        article={true}
      />
      <div className="markdown flex flex-col items-center">
        <h1>{mdx.frontmatter.title}</h1>
        <MDXProvider components={components}>
          <MDXRenderer className="flex flex-col items-center">
            {mdx.body}
          </MDXRenderer>
        </MDXProvider>
        Enjoyed the article?
        <a
          href={`https://twitter.com/intent/tweet?text=${mdx.frontmatter.title}&url=https://www.jenkens.dev/blog/${mdx.slug}&via=jenkens_`}
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
      }
    }
  }
`

export default PageTemplate
