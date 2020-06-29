// import React from "react"
// import { graphql, Link } from "gatsby"
// import "../index.scss"
// import About from "../components/About/About"
// import Layout from "../components/Layout"

// export default function Home({ data }) {
//   return (
//     <Layout>
//       <About />
//       <div className="favoriteBlogs">
//         <h3>My favorite posts</h3>
//         <ul>
//           <Link to="/articles/beginners-guide-to-react-redux/">
//             <li>Beginner's Guide to React Redux</li>
//           </Link>
//           <Link to="/articles/react-redux-with-hooks/">
//             <li>React Redux with Hooks</li>
//           </Link>
//           <Link to="/articles/what-is-graphql/">
//             <li>What is GraphQL?</li>
//           </Link>
//         </ul>
//       </div>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//             status
//           }
//           excerpt
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `

import React from "react"
import { Link, graphql } from "gatsby"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <div>
      <h1>Awesome MDX Blog</h1>

      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex
