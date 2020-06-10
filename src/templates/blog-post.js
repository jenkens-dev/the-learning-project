import React from "react"
import NavBar from "../components/NavBar/NavBar"
import { graphql } from "gatsby"
import "./blogPost.scss"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <>
      <NavBar />
      <div className="blogPost">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} className="blogPostContent"/>
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
