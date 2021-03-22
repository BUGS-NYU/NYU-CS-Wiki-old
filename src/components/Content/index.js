import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import GroupNav from "./GroupNav";
import Article from "./Article";
import Layout from "../Layout";

const Content = ({ data: { markdownRemark } }) => {
  const {
    frontmatter,
    html,
    fields: { slug },
  } = markdownRemark;

  return (
    <Layout>
      <ContentContainer>
        <GroupNav path={slug} />
        <Article frontmatter={frontmatter} html={html} />
      </ContentContainer>
    </Layout>
  );
};

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      headings {
        id
        depth
        value
      }
      fields {
        slug
        gitAuthorTime
      }
    }
  }
`;

export default Content;
