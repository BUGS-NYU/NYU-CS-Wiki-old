import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { breakdownSlugIntoUrls } from "../utils/slugs";

const Breadcrumb = ({ slug }) => {
  if (!slug) return;

  const parts = slug.split("/");
  parts.shift();

  const urls = breakdownSlugIntoUrls(slug);

  return (
    <div>
      {urls.map((url, i) => (
        <Slug key={`breadcrumb_${url}`}>
          <Link to={url}>
            {"/"}
            {parts[i]}
          </Link>
        </Slug>
      ))}
    </div>
  );
};

const Slug = styled.span`
  font-weight: 300;
  font-size: 0.73rem;
  opacity: 0.5;

  & > a {
    text-decoration: none;
    color: var(--colors-primary);
  }
`;

export default Breadcrumb;
