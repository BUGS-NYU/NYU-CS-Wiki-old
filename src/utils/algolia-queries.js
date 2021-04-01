const indexName = `Posts`;

const postQuery = `{
  posts: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/content/" },
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
}`;

function pageToAlgoliaRecord({ node: { id, frontmatter, fields } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
  };
}

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => data.posts.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: {
      hitsPerPage: 12,
    },
  },
];

module.exports = queries;
