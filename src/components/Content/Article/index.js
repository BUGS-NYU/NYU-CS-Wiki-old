import React from 'react';
import styled from 'styled-components';

const Article = ({post}) => {
    return (
        <ArticleContainer>
            <h1> {post.frontmatter.title} </h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </ArticleContainer>
    )
}

export default Article;

const ArticleContainer = styled.div`
padding-left: 3rem;
padding-top: 3rem;
display: inline-block;
box-shadow: -4px 0px 20px rgba(0, 0, 0, 0.1);
width: 75%;
vertical-align: top;
height: 100%;
overflow-y: auto;
`;