import * as React from "react";
import styled from "styled-components";
import LeftTriangle from "../images/svg/left-triangle.svg";
import RightTriangle from "../images/svg/right-triangle.svg";
const LandingPageBackground = ({ children }) => (
  <>
    <LandingPageGradient>
      {children}
      <LeftTriangleSvg />
      <RightTriangleSvg />
    </LandingPageGradient>
    <Footer />
  </>
);

const LandingPageGradient = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(215.53deg, #6f3ecf 11.68%, #c47bf2 103.31%),
    #894fd9;
  height: calc(100vh - 4rem);
  z-index: -2;
`;

const LeftTriangleSvg = styled(LeftTriangle)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 75%;
  height: 45%;
  z-index: -1;
`;

const RightTriangleSvg = styled(RightTriangle)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 75%;
  height: 45%;
  z-index: -1;
`;

const Footer = styled.footer`
  background: #222943;
  height: 4rem;
`;

export default LandingPageBackground;
