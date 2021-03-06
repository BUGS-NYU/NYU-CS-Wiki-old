import React from "react";

import { ThemeProvider } from "./ThemeContext";
import GlobalStyles from "./GlobalStyles";

import "fontsource-poppins";
import "fontsource-roboto";

function App({ children }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default App;
