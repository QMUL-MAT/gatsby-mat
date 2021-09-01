const fs = require("fs")
const path = require("path")
const Cite = require("citation-js")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

module.exports.onCreateNode = async ({
  node,
  actions,
  store,
  getCache,
  createNodeId,
}) => {
  const { createNode, createNodeField } = actions

  const contentDir = path.resolve("./src/content")

  if (node.internal.type === "MarkdownRemark") {
    const fields = {
      category: path.dirname(path.relative(contentDir, node.fileAbsolutePath)),
      slug: path.basename(node.fileAbsolutePath, ".md").replace("_", "-"),
      sortYear: node.frontmatter.year || "1970",
    }
    for (const [name, value] of Object.entries(fields)) {
      createNodeField({ node, name, value })
    }
  }

  if (node.internal.type === "File" && node.ext === ".bib") {
    fs.readFile(node.absolutePath, "utf8", (err, content) => {
      if (err) {
        console.error(err)
        return
      }
      const citation = new Cite(content)
      const html = citation.format("bibliography", {
        format: "html",
        template: "apa",
        lang: "en-GB",
      })
      createNodeField({ node, name: "bib", value: content })
      createNodeField({ node, name: "html", value: html })
    })
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

  const queryResults = await graphql(`
    query {
      all: allMarkdownRemark {
        nodes {
          fields {
            category
            slug
          }
        }
      }
      projects: allMarkdownRemark(
        filter: { fields: { category: { eq: "projects" } } }
      ) {
        nodes {
          fields {
            slug
          }
        }
      }
      arsProjects: allMarkdownRemark(
        filter: { fields: { category: { eq: "events/ars-2019" } } }
      ) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  const templates = {
    programmes: path.resolve("./src/templates/programme.js"),
    students: path.resolve("./src/templates/student.js"),
    projects: path.resolve("./src/templates/project.js"),
    events: path.resolve("./src/templates/event.js"),
    "events/ars-2019": path.resolve("./src/templates/ars2019project.js"),
  }

  // Create pages from items in categories and templates
  queryResults.data.all.nodes.forEach(node => {
    if (node.fields.category in templates) {
      const category = node.fields.category
      const slug = node.fields.slug
      createPage({
        component: templates[category],
        path: `/${category}/${slug}`,
        context: { category, slug, subItems: `${category}/${slug}` },
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

  // Create client side redirects for backwards compatibility of URLs with old WP site
  const redirectTemplate = path.resolve("./src/templates/redirect.js")
  const redirects = {
    "/students-projects/": "/projects/",
    "/about-us/": "/about/",
    "/mat-news/": "/news/",
    "/ars-2019/": "/events/ars-2019/",
    "/chi2019/": "/events/chi2019/",
    "/nime2020/": "/events/nime2020",
    "/xr-chi-2021/": "/events/xr-chi-2021",
  }

  queryResults.data.projects.nodes.forEach(project => {
    redirects[
      `/students_projects/${project.fields.slug}/`
    ] = `/projects/${project.fields.slug}`
  })
  queryResults.data.arsProjects.nodes.forEach(project => {
    redirects[
      `/ars-2019/${project.fields.slug}/`
    ] = `/events/ars-2019/${project.fields.slug}`
  })

  for (const [from, to] of Object.entries(redirects)) {
    createPage({
      component: redirectTemplate,
      path: from,
      context: { to },
    })
  }
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
              .find(
                node =>
                  node.fields.category === "students" &&
                  node.fields.slug === source.student
              )
          },
        },
      },
    }),
  ]
  createTypes(typeDefs)
}
