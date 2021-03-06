import React from "react";
import Terser from "terser";

import COLORS from "./src/utils/theme";

// Code to prevent flashing of Dark Mode adapted from
// https://www.joshwcomeau.com/react/dark-mode/
// https://github.com/joshwcomeau/dark-mode-minimal/blob/master/gatsby-ssr.js

function setColorsByTheme() {
  const colors = "🌈";

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem("color-mode");

  let colorMode = "light";

  const hasUsedToggle = typeof persistedPreference === "string";

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? "dark" : "light";
  }

  const root = document.documentElement;

  root.style.setProperty("--initial-color-mode", colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVar = `--color-${name}`;
    root.style.setProperty(cssVar, colorByTheme[colorMode]);
  });
}

const DarkModeScript = () => {
  const boundFn = String(setColorsByTheme).replace(
    "'🌈'",
    JSON.stringify(COLORS)
  );

  let clientCode = `(${boundFn})()`;

  clientCode = Terser.minity(clientCode).code;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: clientCode }} />;
};

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
const FallbackStyles = () => {
  // programatically create css variables from color list and use light by default
  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.light};`;
    },
    ""
  );

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles />);
  setPreBodyComponents(<DarkModeScript />);
};
