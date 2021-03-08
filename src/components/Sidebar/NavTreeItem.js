import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavTreeItem = ({ label, expanded = false, url = "", nodes = [] }) => {
  const [open, setOpen] = useState(expanded);

  if (nodes.length == 0) {
    return (
      <div>
        <OuterList>
          <li>
            <LinkWrapper
              to={url}
              activeClassName="active"
              partiallyActive={true}
            >
              {label}
            </LinkWrapper>
          </li>
        </OuterList>
      </div>
    );
  }

  return (
    <div>
      <OuterList>
        <li
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="option"
          aria-selected={open}
          onClick={() => setOpen(!open)}
          onKeyPress={() => setOpen(!open)}
        >
          {label}
        </li>
        <ul>
          {nodes &&
            open &&
            nodes.length > 0 &&
            nodes.map(({ label, url }, i) => (
              <li key={`${i}_${label}`}>
                <LinkWrapper
                  to={url}
                  activeClassName="active"
                  partiallyActive={true}
                >
                  {label}
                </LinkWrapper>
              </li>
            ))}
        </ul>
      </OuterList>
    </div>
  );
};

const OuterList = styled.ul`
  list-style: none;

  margin-left: 2rem;

  li {
    color: var(--color-text);
    font-size: 0.8rem;
    font-weight: 300;
    cursor: pointer;
  }

  & > li {
    font-weight: 400;
  }

  & > ul {
    list-style: none;
    margin-left: 1rem;
  }

  & li::before {
    content: "•";
    color: var(--color-outerBulletPoint);
    display: inline-block;
    font-size: 1.5rem;
    width: 1rem;
    line-height: 72%;
    margin-left: -1rem;
    position: relative;
    top: 0.25rem;
  }

  & > li::before {
    color: var(--color-outerBulletPoint);
  }

  & > ul > li::before {
    color: var(--color-innerBulletPoint);
  }
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: var(--color-text);
  &.active {
    color: var(--color-secondary);
  }
`;

export default NavTreeItem;
