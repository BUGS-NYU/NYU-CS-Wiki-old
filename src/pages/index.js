import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout isLandingPage>
    <SEO title="Home" />
    <HeroTitle>Academic&nbsp;&amp;&nbsp;Career Knowledge&nbsp;Base</HeroTitle>
    <Link to="/home" style={{ textDecoration: "none" }}>
      <CallToActionText>Get Started</CallToActionText>
    </Link>
    <FakePaper />
  </Layout>
);

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
  color: #ffffff;
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

  // This can be changed. I just added it to give the homepage some better UX and animation
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
  width: 50%;

  // TODO ! Fix this since it isnt a perfect styling fix for our design.
  height: 56vh;
  margin: 5rem auto;
`;

export default IndexPage;
