import React from "react";
import styled from "styled-components";

import NavTree from "./NavTreeMenu";

const SideBar = () => {
  // ! This should not be explicitly defined. We should store the opened structure in localstorage for less user problems
  // ! see https://github.com/cephalization/gatsby-wiki/blob/master/src/components/navtree.js
  const data = [
    {
      label: "Home",
      url: "/home",
    },
    {
      label: "Guides",
      url: "/guides",
      expanded: true,
      nodes: [
        {
          label: "Academic Guides",
          url: "/guides/academic",
          expanded: true,
          nodes: [
            {
              label: "Courses",
              url: "/guides/academic/courses",
            },
          ],
        },
        {
          label: "Learn",
          url: "/guides/learn",
        },
      ],
    },
    {
      label: "Career",
      url: "/career",
    },
    {
      label: "Academics",
      url: "/academics",
    },
    {
      label: "Contribution Log",
      url: "/contributions",
    },
  ];

  return (
    <Container>
      <NavTree data={data} />
    </Container>
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
  padding-top: 3rem;
  padding-left: 5%;
`;

export default SideBar;