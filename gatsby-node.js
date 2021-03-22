/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);
const { execSync } = require("child_process");

// populate data for pages to be used by the create pages method below
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (`MarkdownRemark|Mdx`.includes(node.internal.type)) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    if (node.fileAbsolutePath && node.fileAbsolutePath.includes("/index.")) {
      createNodeField({
        node,
        name: "isIndexPage",
        value: true,
      });
    }

    // https://angelos.dev/2019/09/add-support-for-modification-times-in-gatsby/
    const gitAuthorTime = execSync(
      `git log -1 --pretty=format:%aI ${node.fileAbsolutePath}`
    ).toString();

    createNodeField({
      node,
      name: "gitAuthorTime",
      value: gitAuthorTime,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
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
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (!node.frontmatter.title) {
        console.warn(
          node.fields.slug,
          " is missing a title in the frontmatter"
        );
      }
      createPage({
        path: node.fields.slug,
        component: path.resolve("src/components/templates/GuideTemplate.js"),
        context: {
          slug: node.fields.slug,
        }, // additional data can be passed via context
      });
    });
  });
};
