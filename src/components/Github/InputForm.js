import classes from "./InputForm.module.css";
import { useRef } from "react";

const InputForm = (props) => {
  const inputRef = useRef("");

  const API_URL = "https://api.github.com";

  async function fetchResults(query) {
    try {
      const response = await fetch(`${API_URL}/search/users?q=${query}`);
      const json = await response.json();
      return json.items || [];
    } catch (e) {
      throw new Error(e);
    }
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const data = await fetchResults(inputRef.current.value);
    props.onSubmit(data);
    inputRef.current.value = "";
  };

  return (
    <form className={classes["search-form"]} onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Search by username or email"
        ref={inputRef}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default InputForm;
