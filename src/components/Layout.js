import * as React from "react";

// import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import { ThemeProvider } from "./ThemeContext";
import GlobalStyles from "./GlobalStyles";
import LandingPageBackground from "./LandingPageBackground";

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

export default Layout;
