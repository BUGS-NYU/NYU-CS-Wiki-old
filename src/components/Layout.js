import * as React from "react";
import styled from "styled-components";

import Header from "./Header";
import { ThemeProvider } from "./ThemeContext";
import GlobalStyles from "./GlobalStyles";
import LandingPageBackground from "./LandingPageBackground";
import SideBar from "./Sidebar";

import "fontsource-poppins/700.css";
import "fontsource-poppins/600.css";
import "fontsource-poppins/500.css";
import "fontsource-poppins/400.css";
import "fontsource-poppins/300.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/400.css";

const Layout = ({ children, isLandingPage = false }) => {
  if (isLandingPage) {
    return (
      <ThemeProvider>
        <LandingPageBackground>
          <GlobalStyles />
          <Header isLandingPage={isLandingPage} />
          <main>{children}</main>
        </LandingPageBackground>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Header />
      <Main>
        <SideBar />
        <ContentWrapper>{children}</ContentWrapper>
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 4rem);
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: inline-block;
  background: var(--color-body);
  box-shadow: -3px 0px 6px rgba(0, 0, 0, 0.15);
  padding: 1rem;
`;

export default Layout;
