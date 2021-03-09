import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import CodeBlock from "../components/CodeBlock/";
import SEO from "../components/seo";

const IndexPage = () => {
  const textBlock = `# In general, you'll need to first fork the repository to your own account, then clone it to your own computer with 
git clone https://github.com/YOUR-USER-NAME/nyu-wiki.github.io.git
# Next you'll want to set up your local master branch to track your forked repository. You can do this with:
git branch set-url --push origin https://github.com/YOUR-USER-NAME/nyu.wiki.github.io.git
git branch -u origin/master`;

  return (
    <Layout isLandingPage>
      <SEO title="Landing" />
      <HeroTitle>Academic&nbsp;&amp;&nbsp;Career Knowledge&nbsp;Base</HeroTitle>
      <CallToActionText>
        <Link to="/home" style={{ textDecoration: "none", color: "#FFFFFF" }}>
          Get Started
        </Link>
      </CallToActionText>

      <FakePaper>
        <Title>#Guides</Title>
        <GuideTitle>
          <a href="/linktoguidesomewhere">Getting Started With Open Source</a>
        </GuideTitle>
        <Title>Introduction</Title>
        <Paragraph>
          A collection of course testimonials, guides, career prep resources,
          and much more! BUGS@NYU believes these resources should be available
          to the CS community at NYU both at CAS and Tandon for students to
          prepare for their career.
        </Paragraph>
        <Title>Code</Title>
        <CodeBlock codeString={textBlock} language="Git" />
      </FakePaper>
    </Layout>
  );
};

const HeroTitle = styled.h2`
  color: #ffffff;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 2.8rem;
  color: white;
  line-height: 91%;
  text-align: center;
  letter-spacing: 0.05em;
  max-width: 550px;
  width: 40%;
  min-width: 500px;
  margin: 3rem auto;
`;

const CallToActionText = styled.h3`
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 91%;
  text-align: center;
  letter-spacing: 0.05em;
  position: relative;
  width: max-content;
  margin: auto;
  padding: 10px 0;

  border-bottom: 2px solid #ffffff;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #7dfdf5;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const FakePaper = styled.div`
  background: #f9f9f9;
  box-shadow: -30px 0px 30px rgba(0, 0, 0, 0.15),
    0px -30px 60px rgba(0, 0, 0, 0.15), 30px 0px 40px rgba(0, 0, 0, 0.15);
  width: 60%;

  // ! This height should work on every viewport. It doesn't right now.
  min-height: 56vh;
  margin: 5rem auto 0 auto;
  padding: 1.5rem 2rem;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  opacity: 0.5;
  font-weight: 500;
`;

const GuideTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;

  a {
    text-decoration: none;
    color: var(--background);
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin: 1.25rem 0;
`;

export default IndexPage;
