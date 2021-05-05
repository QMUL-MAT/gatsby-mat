const path = require("path")
const { createRemoteFileNode } = require('gatsby-source-filesystem');

module.exports.onCreateNode = async ({
  node, actions, store, getCache, createNodeId
}) => {
  const { createNode, createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const fields = {
      category: path.basename(path.dirname(node.fileAbsolutePath)),
      slug: path.basename(node.fileAbsolutePath, ".md").replace("_", "-"),
    }
    for (const [name, value] of Object.entries(fields)) {
      createNodeField({ node, name, value })
    }
  }

  if (node.internal.type === "twitterStatusesUserTimelineTimeline") {
    const image_url = node?.retweeted_status?.user?.profile_banner_url;
    if (image_url) {
      const fileNode = await createRemoteFileNode({
        url: image_url,
        parentNodeId: node.id,
        store,
        getCache,
        createNode,
        createNodeId,
      });
      if (fileNode) {
        node.image___NODE = fileNode.id
      }
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
