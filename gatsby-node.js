const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // you only want to operate on `Mdx` nodes.
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })

    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix.
      value: `/blog${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges

  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/posts-page-layout.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
