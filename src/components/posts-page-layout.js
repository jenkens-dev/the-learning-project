import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import CodeBlock from "../components/CodeBlock"
import "./blogPost.scss"

const components = {
  code: CodeBlock,
  wrapper: props => (
    <div className="blogPost">
      <main {...props} />
    </div>
  ),
}

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <h1 className="title">{mdx.frontmatter.title}</h1>
      <MDXProvider components={components}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
