import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import "./blogPost.scss"

export default function BlogPost() {
  // const post = data.markdownRemark
  return (
    <Layout>
      {/* <div className="blogPost">
        <h1>{post.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="blogPostContent"
        />
      </div> */}
      <div>Hi</div>
    </Layout>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
