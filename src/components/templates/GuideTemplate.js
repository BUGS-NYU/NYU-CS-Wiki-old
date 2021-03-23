import React from "react";
import { graphql } from "gatsby";
import BlogPostLayout from "./PostLayout";

const GuideTemplate = ({ data: { markdownRemark } }) => {
  const {
    frontmatter,
    // headings, use this if we want a table of contents
    html,
    fields: { slug, isIndexPage, lastUpdatedString },
  } = markdownRemark;

  return (
    <BlogPostLayout {...{ frontmatter, lastUpdatedString, isIndexPage, slug }}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </BlogPostLayout>
  );
};

export default GuideTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
      }
      headings {
        id
        depth
        value
      }
      fields {
        slug
        isIndexPage
        gitAuthorTime
        lastUpdatedString: gitAuthorTime(formatString: "MMM Do YYYY")
      }
    }
  }
`;
