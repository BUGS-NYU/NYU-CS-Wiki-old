import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
const GroupNav = ({items, groupName, path}) => {
    return (
        <ContentNavWrapper>
            <Slug>{path.match(/.*(?=\/)/g)}</Slug>
            <Title>{groupName.charAt(0).toUpperCase() + groupName.slice(1)}</Title>
            <ItemsList>
                {items.map((item) => (
                    <li className = {path === item.path? 'activeItem': 'Item'}><Link to = {item.path}>{item.title}</Link>{item.tag != null && <span>{item.tag}</span>}</li>
                ))}
            </ItemsList>  
        </ContentNavWrapper>
    )
}

export default GroupNav;


const ContentNavWrapper = styled.div`
    padding-left: 3rem;
    padding-top: 3rem;
    display: inline-block;
    width: 20%;
    height: 100%;
    vertical-align: top;
`;
const Slug = styled.p`
font-weight: 300;
font-size: .7rem;
opacity: .5;
`

const Title = styled.h1`
    margin-top: 2rem;
    font-weight: 500;
    font-size: 1.5rem;
`

const ItemsList = styled.ul`
  list-style: none;
  margin-top: 1rem;
  margin-left: 2rem;
  .Item, .activeItem {
    margin-top: 1rem;
    cursor: pointer;
    a {
        text-decoration: none;
        color: var(--color-text);
        font-size: .9rem;
        font-weight: 300;
    }
    span {
        color: #FFFFFF;
        font-size: .8rem;
        background: rgba(26, 26, 26, 0.852);
        border-radius: 3px;
        margin-left: .5rem;
        padding: 2px 7px 2px 7px;
        border-radius: 5px;
    }
  }
  & > .Item {
    font-weight: 400;
  }
  & > ul {
    list-style: none;
    margin-left: 1rem;
  }
  & .Item::before {
    content: "•";
    color: var(--color-outerBulletPoint);
    display: inline-block;
    font-size: 2rem;
    width: 1rem;
    line-height: 72%;
    margin-left: -1rem;
    position: relative;
    top: 0.25rem;
  }
  .activeItem::before {
    content: "•";
    color: #8041B7;;
    display: inline-block;
    font-size: 2rem;
    width: 1rem;
    line-height: 72%;
    margin-left: -1rem;
    position: relative;
    top: 0.25rem;
  }
`;