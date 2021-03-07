import * as React from "react";
import styled from "styled-components";

import Logo from "../images/svg/logo.svg";

const HeaderBranding = ({ isLandingPage = false }) => (
  <Container>
    {!isLandingPage && <WikiLogo />}
    <SiteName isLanding={isLandingPage}>
      NYU CS <span>Wiki</span>
    </SiteName>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  min-width: 160px;
`;

const WikiLogo = styled(Logo)`
  position: relative;
  width: 2rem;
  height: 2rem;
  top: 0.1rem;
`;

const SiteName = styled.h1`
  color: ${({ isLanding }) => (isLanding ? "#FFFFFF" : "var(--color-text)")};
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 1.3rem;

  span {
    background-color: ${({ isLanding }) =>
      isLanding ? "#432E60" : "var(--color-secondary)"};
    color: #ffffff;
    position: relative;
    padding: 0.05rem 0.4rem;
    bottom: 0.1rem;
    font-family: Roboto;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 91%;
    letter-spacing: 0.05em;
    border-radius: 2px;
  }
`;

export default HeaderBranding;
