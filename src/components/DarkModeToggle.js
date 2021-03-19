import React, { useContext } from "react";
import { useSpring, animated } from "react-spring";

// inspired by https://jfelix.info/blog/using-react-spring-to-animate-svg-icons-dark-mode-toggle
import { ThemeContext } from "./ThemeContext";

const DarkModeToggle = ({ size = 24 }) => {
  const { colorMode = "light", setColorMode } = useContext(ThemeContext);

  const properties = defaultProperties;
  const { circle, svg, lines, mask } = properties[colorMode];

  const svgContainerProps = useSpring({
    ...svg,
    config: properties.springConfig,
  });

  const centerCircleProps = useSpring({
    ...circle,
    config: properties.springConfig,
  });

  const maskedCircleProps = useSpring({
    ...mask,
    config: properties.springConfig,
  });

  const linesProps = useSpring({
    ...lines,
    config: properties.springConfig,
  });

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      color={colorMode === "dark" ? "#FFFFFF" : "#9A9A9A"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      onClick={() => {
        setColorMode(colorMode === "dark" ? "light" : "dark");
      }}
      style={{
        cursor: "pointer",
        ...svgContainerProps,
      }}
    >
      <mask id="darkModeToggleMask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <animated.circle style={maskedCircleProps} r="9" fill="#000000" />
      </mask>
      <animated.circle
        cx="12"
        cy="12"
        fill={colorMode === "dark" ? "#FFFFFF" : "#9A9A9A"}
        style={centerCircleProps}
        mask="url(#darkModeToggleMask)"
      />
      <animated.g stroke="currentColor" style={linesProps}>
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </animated.g>
    </animated.svg>
  );
};

export const defaultProperties = {
  dark: {
    circle: {
      r: 9,
    },
    mask: {
      cx: "50%",
      cy: "23%",
    },
    svg: {
      transform: "rotate(40deg)",
    },
    lines: {
      opacity: 0,
    },
  },
  light: {
    circle: {
      r: 5,
    },
    mask: {
      cx: "100%",
      cy: "0%",
    },
    svg: {
      transform: "rotate(90deg)",
    },
    lines: {
      opacity: 1,
    },
  },
  springConfig: { mass: 4, tension: 250, friction: 35 },
};

export default DarkModeToggle;
