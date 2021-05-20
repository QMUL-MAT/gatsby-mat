const path = require("path")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

module.exports.onCreateNode = async ({
  node,
  actions,
  store,
  getCache,
  createNodeId,
}) => {
  const { createNode, createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const fields = {
      category: path.basename(path.dirname(node.fileAbsolutePath)),
      slug: path.basename(node.fileAbsolutePath, ".md").replace("_", "-"),
      sortYear: node.frontmatter.year || "1970"
    }
    for (const [name, value] of Object.entries(fields)) {
      createNodeField({ node, name, value })
    }
  }

  if (node.internal.type === "twitterStatusesUserTimelineTimeline") {
    const image_url = node?.retweeted_status?.user?.profile_banner_url
    if (image_url) {
      const fileNode = await createRemoteFileNode({
        url: image_url,
        parentNodeId: node.id,
        store,
        getCache,
        createNode,
        createNodeId,
      })
      if (fileNode) {
        node.image___NODE = fileNode.id
      }
    }
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const templates = {
    programmes: path.resolve("./src/templates/programme.js"),
    students: path.resolve("./src/templates/student.js"),
    projects: path.resolve("./src/templates/project.js")
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

  // Create pages for programmes and students
  res.data.allMarkdownRemark.nodes.forEach(node => {
    if (node.fields.category in templates) {
      const category = node.fields.category
      const slug = node.fields.slug
      createPage({
        component: templates[category],
        path: `/${category}/${slug}`,
        context: { category, slug },
      })
    }
  })

  // Create partners and sponsors pages
  const partnersSponsorsTemplate = path.resolve(
    "./src/templates/partners_sponsors.js"
  )
  createPage({
    component: partnersSponsorsTemplate,
    path: "/partners",
    context: {
      category: "partners",
      pageTitle: "Partners we have worked with",
      header: "/images/partners_header.jpg",
    },
  })
  createPage({
    component: partnersSponsorsTemplate,
    path: "/sponsors",
    context: { category: "sponsors", pageTitle: "Sponsors" },
  })
}

// Add students to projects (psuedo-join)
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
    schema.buildObjectType({
      name: "Frontmatter",
      fields: {
        student: {
          type: "MarkdownRemark",
          resolve: (source, args, context, info) => {
            return context.nodeModel
              .getAllNodes({ type: "MarkdownRemark" })
              .find(node => node.fields.category === "students" && node.fields.slug === source.student)
          },
        },
      },
    }),
  ]
  createTypes(typeDefs)
}