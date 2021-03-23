import * as React from "react";
import styled from "styled-components";
// import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";

import Logo from "../images/svg/logo.svg";

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <HomeBrandingContainer>
        <SiteLogo />
        <div>
          <h1>
            The <span className="purple">NYU</span> CS Wiki
          </h1>
          <p>
            A collection of course testimonials, guides, career prep, resources,
            and much more! Actively looking for contributions.
          </p>
        </div>
      </HomeBrandingContainer>

      <SectionHeader>Get Started</SectionHeader>
    </Container>
  </Layout>
);

const Container = styled.div`
  padding: 3rem;
`;

const HomeBrandingContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;

  div > h1 {
    font-family: Poppins;
    font-weight: 500;
    color: var(--color-primary);
  }

  div > p {
    max-width: 540px;
  }

  .purple {
    color: var(--color-secondary);
  }
`;

const SiteLogo = styled(Logo)`
  width: 14%;
  max-width: 100px;
  min-width: 80px;
  height: auto;
  margin-right: 1rem;
`;

const SectionHeader = styled.h3`
  font-family: Poppins;
  font-weight: 500;
  color: var(--color-primary);
`;

export default HomePage;
