import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import NavTree from "./NavTreeMenu";
import { breakdownSitePagesToSidebar } from "../../utils/slugs";

const SideBar = ({ isOpen }) => {
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
          <Container isOpen={isOpen}>
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
  overflow-x: hidden;
  background: linear-gradient(
    180deg,
    var(--color-sidebarBg) 0%,
    transparent 100%
  );
  transition: left 200ms;

  // ! fix these
  padding-top: 2rem;
  padding-left: 5%;

  @media screen and (max-width: 750px) {
    position: fixed;
    top: 4rem;
    left: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  }
`;

export default SideBar;
