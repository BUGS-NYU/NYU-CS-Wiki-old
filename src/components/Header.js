import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import HeaderBranding from "./HeaderBranding";
import SearchBar from "./SearhBar";

const Header = ({ isLandingPage = false }) => (
  <HeaderContainer isLandingPage={isLandingPage}>
    <Link to={isLandingPage ? "/" : "/home"}>
      <HeaderBranding isLandingPage={isLandingPage} />
    </Link>
    {/* Add any other options in the header below */}
    {/* <span>search...</span> */}
    {isLandingPage ? null : <SearchBar />}
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  ${({ isLandingPage }) =>
    !isLandingPage
      ? `
    background-color: var(--color-headerBg);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  `
      : ""}

  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;
  margin-bottom: 1rem;

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }
`;

export default Header;
