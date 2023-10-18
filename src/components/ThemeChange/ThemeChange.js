import classes from "./ThemeChange.module.css";
import ThemeContext from "../../store/theme-context";
import { useContext } from "react";

const ThemeChange = () => {
  const { themes, selectedTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1>Project 8: Theme change with context</h1>
      <div className={classes.container}>
        <div className={classes.row}>
          <span>{selectedTheme === "light" ? "Dark" : "Light"} Theme</span>
          <label class={classes.switch}>
            <input type="checkbox" onChange={toggleTheme} />
            <span className={`${classes.slider} ${classes.round}`}></span>
          </label>
        </div>
        <div
          style={{
            background: themes[selectedTheme].background,
            color: themes[selectedTheme].text,
          }}
        >
          This component adopts the theme change
        </div>
      </div>
    </>
  );
};

export default ThemeChange;
