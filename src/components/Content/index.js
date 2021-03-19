import React from 'react';
import Layout from "../Layout";
import { graphql } from 'gatsby';
import GroupNav from './GroupNav';
import styled from 'styled-components';
import Article from './Article';
const Content = (props) => {
    const {markdownRemark: post} = props.data;
    const {allMarkdownRemark: groupList} = props.data;
    const subItems = groupList.edges.filter((group) => {
        if(!group.node.frontmatter.isGroup){
            return group;
        }
    }).map(group => ({
        title: group.node.frontmatter.title,
        tag: group.node.frontmatter.tag,
        path: group.node.frontmatter.path
    }))
    return (
        <Layout>
            <ContentContainer>
                <GroupNav path = {post.frontmatter.path} items = {subItems} groupName = {post.frontmatter.group}></GroupNav>
                {!post.frontmatter.isGroup && 
                    <Article post = {post}/>
                }
            </ContentContainer>
        </Layout>
    )
}

const ContentContainer = styled.div`
height: 100%;
width: 100%;
`;

export const pageQuery = graphql`
  query articleByPath($path: String!, $group: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        group
        isGroup
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
              isGroup
            }
          }
        }
      }
  }
`;

export default Content;