import React, { useEffect, useMemo } from "react";

import COLORS from "../utils/theme";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = useMemo(() => {
    function setColorMode(newValue) {
      const root = window.document.documentElement;

      localStorage.setItem("color-mode", newValue);

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVar = `--color-${name}`;
        root.style.setProperty(cssVar, colorByTheme[colorMode]);
      });

      rawSetColorMode(newValue);

      return {
        colorMode,
        // eslint-disable-next-line no-unused-vars
        setColorMode,
      };
    }
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
