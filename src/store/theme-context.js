import React from "react";
const ThemeContext = React.createContext({
  caption: "",
  selectedTheme: "",
  themes: {},
  toggleTheme: () => {},
});

export default ThemeContext;
