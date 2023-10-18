import { useReducer } from "react";
import ThemeContext from "./theme-context";

const themes = {
  light: {
    background: "white",
    text: "black",
  },
  dark: {
    background: "black",
    text: "white",
  },
};

const themeReducer = (state, action) => {
  return state === "light" ? "dark" : "light";
};

const ThemeProvider = (props) => {
  const [themeState, dispatchThemeChangeAction] = useReducer(
    themeReducer,
    "light"
  );

  const changeTheme = () => {
    dispatchThemeChangeAction({ type: "CHANGE" });
  };

  const themeContext = {
    selectedTheme: themeState,
    themes: themes,
    toggleTheme: changeTheme,
  };
  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
