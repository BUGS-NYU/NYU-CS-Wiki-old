import React from "react";
import styled from "styled-components";

import Layout from "../Layout";
import SEO from "../seo";
import Breadcrumb from "../Breadcrumb";

const PostLayout = ({ frontmatter, slug, lastUpdatedString, children }) => {
  const { title, author } = frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <Breadcrumb slug={slug} />
        <Title>{title}</Title>
        {author && <h3>{author}</h3>}
        <ChildrenContainer>{children}</ChildrenContainer>

        {lastUpdatedString !== "Invalid date" && <p>{lastUpdatedString}</p>}
      </Container>
    </Layout>
  );
};

const Title = styled.h1`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;
const Container = styled.div`
  padding: 2rem 4rem;
  display: inline-block;
  box-shadow: -4px 0px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  vertical-align: top;
  height: 100%;
  overflow-y: auto;
`;

const ChildrenContainer = styled.div`
  padding: 0.75rem;
  margin: 0.5rem;

  table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
  }

  tr,
  td,
  th {
    padding: 0.75rem;
    border: 1px solid var(--color-sidebarLine);
  }

  tr:nth-child(even) {
    background-color: var(--color-sidebarBg);
  }

  a {
    text-decoration: none;
  }
`;

export default PostLayout;
