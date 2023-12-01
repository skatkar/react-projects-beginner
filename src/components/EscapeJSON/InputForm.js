import classes from "./InputForm.module.css";
import { useRef } from "react";

const InputForm = (props) => {
  const inputRef = useRef("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    let jsonObject = inputRef.current.value;
    let jsonString = JSON.stringify(jsonObject);
    let escapedString = jsonString.replace(/[\n\t\r"']/g, function (char) {
      // Replace special characters with their escaped counterparts
      switch (char) {
        case "\n":
          return "\\n";
        case "\t":
          return "\\t";
        case "\r":
          return "\\r";
        case '"':
          return '\\"';
        case "'":
          return "\\'";
        // Add more cases if needed
        default:
          return char;
      }
    });
    props.onSubmit(escapedString.replace(/\\\\/g, "\\"));
    console.log(escapedString.replace(/\\\\/g, "\\"));
    inputRef.current.value = "";
  };

  return (
    <form className={classes["search-form"]} onSubmit={onSubmitHandler}>
      {/* <input type="text" placeholder="Input JSON goes here" ref={inputRef} /> */}
      <textarea rows={40} cols={50} ref={inputRef} />
      <input type="submit" value="Convert" />
    </form>
  );
};

export default InputForm;
