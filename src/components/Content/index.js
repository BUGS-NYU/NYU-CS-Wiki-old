import React from 'react';
import Layout from "../Layout";
import { graphql } from 'gatsby';

const Content = (props) => {
    const {markdownRemark: post} = props.data;
    const {allMarkdownRemark: groupList} = props.data;
    const subItems = groupList.edges.map(group => ({
        title: group.node.frontmatter.title,
        tag: group.node.frontmatter.path,
        path: group.node.frontmatter.path
    }))
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />

                {subItems.map(item => {
                    return (
                        <div>
                        <a href = {item.path}>{item.title}</a>
                        <br/>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query articleByPath($path: String!, $group: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        group
      }
    },
    allMarkdownRemark(filter: {frontmatter: {group: {eq: $group}}}) {
        nodes {
          id
        }
        edges {
          node {
            frontmatter {
              path
              tag
              title
            }
          }
        }
      }
  }
`;

export default Content;