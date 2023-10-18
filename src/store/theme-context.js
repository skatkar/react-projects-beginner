import React from "react";
const ThemeContext = React.createContext({
  selectedTheme: "",
  themes: {},
  toggleTheme: () => {},
});

export default ThemeContext;
