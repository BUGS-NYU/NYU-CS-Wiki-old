import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import NavTree from "./NavTreeMenu";
import { breakdownSitePagesToSidebar } from "../../utils/slugs";

const SideBar = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSitePage {
            edges {
              node {
                context {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Container>
            <NavTree
              data={breakdownSitePagesToSidebar(data.allSitePage.edges)}
            />
          </Container>
        );
      }}
    />
  );
};

const Container = styled.div`
  display: inline-block;
  height: 100%;
  width: 25%;
  min-width: 250px;
  max-width: 365px;
  z-index: 1;
  top: 4rem;
  left: 0;
  overflow-x: hidden;
  background: linear-gradient(
    180deg,
    var(--color-sidebarBg) 0%,
    transparent 100%
  );

  // ! fix these
  padding-top: 2rem;
  padding-left: 5%;
`;

export default SideBar;
