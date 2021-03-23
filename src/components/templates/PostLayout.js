import React from "react";
import styled from "styled-components";

import Layout from "../Layout";
import SEO from "../seo";
import Breadcrumb from "../Breadcrumb";

const PostLayout = ({
  frontmatter,
  slug,
  lastUpdatedString,
  isIndexPage,
  children,
}) => {
  const { title, author } = frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <Breadcrumb slug={slug} />
        <h1>{title}</h1>
        {author && <h3>{author}</h3>}
        <div>{children}</div>

        {!isIndexPage && lastUpdatedString !== "Invalid date" && (
          <p>{lastUpdatedString}</p>
        )}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  padding-left: 3rem;
  padding-top: 3rem;
  display: inline-block;
  box-shadow: -4px 0px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  vertical-align: top;
  height: 100%;
  overflow-y: auto;
`;

export default PostLayout;
