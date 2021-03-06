import * as React from "react";
import styled from "styled-components";
// import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import { ThemeProvider } from "./ThemeContext";
import GlobalStyles from "./GlobalStyles";

import "fontsource-poppins/600.css";
import "fontsource-poppins/500.css";
import "fontsource-poppins/400.css";
import "fontsource-poppins/300.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/400.css";

const Layout = ({ children, isLandingPage = false }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  if (isLandingPage) {
    return (
      <ThemeProvider>
        <LandingPageBackground>
          <GlobalStyles />
          <Header isLandingPage={isLandingPage} />
          <div>
            <main>{children}</main>
          </div>
        </LandingPageBackground>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Header />
      <div>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </ThemeProvider>
  );
};

const LandingPageBackground = styled.div`
  background: linear-gradient(215.53deg, #6f3ecf 11.68%, #c47bf2 103.31%),
    #894fd9;
  height: auto;
`;

export default Layout;
