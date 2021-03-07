import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import TreeItem from "./NavTreeItem";

/**
 * Props
 *
 * data:
 * [
 *   {
 *      label: "Home",
 *      url: "/home"
 *   },
 *   {
 *      label: "Guides",
 *      url: "/guides"
 *      expanded: true,
 *      nodes: [
 *        {
 *          label: "Academic Guides",
 *           url: "/guides/academic"
 *          nodes: [
 *             {
 *                label: "Courses",
 *                url: "/guides/academic/courses"
 *             },
 *             ...
 *          ]
 *        },
 *        ...
 *      ],
 *   },
 *   ...
 * ]
 *
 *
 * onClick: function that is passed the label, url in an object
 */

const NavTreeParent = ({ label, expanded = false, url = "/", nodes = [] }) => {
  const [open, setOpen] = useState(expanded);

  if (nodes.length === 0) {
    return (
      <LinkContainer to={url} activeClassName="active" partiallyActive={true}>
        <ItemLabel>{label}</ItemLabel>
      </LinkContainer>
    );
  }

  return (
    <ItemContainer>
      <ItemLabel onClick={() => setOpen(!open)}>{label}</ItemLabel>
      {open &&
        nodes.map((props, i) => {
          return <TreeItem key={`${i}_${props.label}`} {...props} />;
        })}
    </ItemContainer>
  );
};

const LinkContainer = styled(Link)`
  display: block;
  color: var(--color-text);
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;

  &.active {
    font-weight: 600;
    color: var(--color-secondary);
  }
`;

const ItemContainer = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
  font-weight: 500;
`;

const ItemLabel = styled.span`
  font-family: Poppins, sans-serif;
  font-weight: inherit;
  font-size: 1rem;
  line-height: 91%;
`;

export default NavTreeParent;
