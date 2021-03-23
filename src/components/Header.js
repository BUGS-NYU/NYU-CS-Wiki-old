import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Turn as Hamburger } from "hamburger-react";

import HeaderBranding from "./HeaderBranding";
import SearchBar from "./SearchBar";
import DarkModeToggle from "./DarkModeToggle";

const Header = ({ isLandingPage = false, open, setOpen }) => {
  return (
    <HeaderContainer isLandingPage={isLandingPage}>
      <Hamburger toggled={open} toggle={setOpen} size={20} />
      <Link to={isLandingPage ? "/" : "/home"}>
        <HeaderBranding isLandingPage={isLandingPage} />
      </Link>
      {/* Add any other options in the header below */}
      {isLandingPage ? (
        <div>
          <LandingPageLink href="/home">How do I Contribute?</LandingPageLink>
          <Separator>|</Separator>
          <LandingPageLink href="https://github.com/BUGS-NYU/cs-resources">
            Github
          </LandingPageLink>
          <Separator>|</Separator>
          <LandingPageLink href="https://bugs-nyu.github.io">
            BUGS@NYU
          </LandingPageLink>
        </div>
      ) : (
        <>
          <SearchBar />
          <DarkModeToggle size={24} />
        </>
      )}
    </HeaderContainer>
  );
};

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
  position: relative;
  z-index: 3;

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }

  & .hamburger-react {
    margin-right: 1rem;
  }

  @media screen and (max-width: 600px) {
    & .hamburger-react {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 750px) {
    & .hamburger-react {
      display: none;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0 2rem;
  }
`;

const LandingPageLink = styled.a`
  color: #ffffff;
  font-family: Poppins;
  font-weight: 300;
  font-size: 0.8rem;
  margin: 0 1rem;

  // ! Add a hover state for these
`;

const Separator = styled.span`
  color: #ffffff;
  opacity: 0.3;
`;

export default Header;
