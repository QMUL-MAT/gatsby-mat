const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === "MarkdownRemark") {
      const fields = {
        category: path.basename(path.dirname(node.fileAbsolutePath))
      }
      for (const [name, value] of Object.entries(fields)) {
        createNodeField({node, name, value})
      }
    }
}
