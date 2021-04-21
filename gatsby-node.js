const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const fields = {
      category: path.basename(path.dirname(node.fileAbsolutePath)),
      slug: path.basename(node.fileAbsolutePath, ".md").replace("_", "-"),
    }
    for (const [name, value] of Object.entries(fields)) {
      createNodeField({ node, name, value })
    }
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const templates = {
    programmes: path.resolve("./src/templates/programme.js")
  }
  const res = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            category
            slug
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.nodes.forEach(node => {
    if (node.fields.category in templates) {
      const category = node.fields.category
      const slug = node.fields.slug
      createPage({
        component: templates[category],
        path: `/${category}/${slug}`,
        context: {category, slug},
      })
    }
  })
}
