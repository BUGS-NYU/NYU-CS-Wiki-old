import * as React from "react";
import styled from "styled-components";

const LeftTriangle = () => (
  <svg viewBox="0 0 1903 694" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.2" d="M-3 0L1903 698H-3V0Z" fill="url(#paint0_linear)" />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="950"
        y1="0"
        x2="950"
        y2="698"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C4C4C4" />
        <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const RightTriangle = () => (
  <svg viewBox="0 0 1906 698" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.2" d="M1906 0L0 698H1906V0Z" fill="url(#paint0_linear)" />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="953"
        y1="0"
        x2="953"
        y2="698"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C4C4C4" />
        <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const LandingPageBackground = ({ children }) => (
  <LandingPageGradient>
    {children}
    <LeftTriangleSvg />
    <RightTriangleSvg />
  </LandingPageGradient>
);

const LandingPageGradient = styled.div`
  width: 100%;
  background: linear-gradient(215.53deg, #6f3ecf 11.68%, #c47bf2 103.31%),
    #894fd9;
  height: auto;
`;

const LeftTriangleSvg = styled(LeftTriangle)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 75%;
`;

const RightTriangleSvg = styled(RightTriangle)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 75%;
`;

export default LandingPageBackground;
