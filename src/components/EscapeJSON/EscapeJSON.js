import ListItem from "./ListItem";
import classes from "./EscapeJSON.module.css";
import { useState } from "react";
import InputForm from "./InputForm";

/* 
  // Refer this code - This will search as the user types in but will wait for 500ms
  const searchInput = useRef(null);

useEffect(() => {
  const debouncedSearch = () => {
    // do something with the search input value
  };

  searchInput.current.addEventListener("input", debouncedSearch, {
    debounce: 500, // delay the search by 500ms
  });
}, []);

*/

const EscapeJSON = () => {
  const [inputJson, setInputJson] = useState("");

  const submitHandler = (data) => setInputJson(data);

  return (
    <>
      <h1>Project 9: Escape JSON util</h1>
      <div className={classes.container}>
        <InputForm onSubmit={submitHandler} />
        {inputJson.length === 0 && (
          <p style={{ color: "grey" }}>No result to display</p>
        )}
        {inputJson.length !== 0 && <ListItem escapedString={inputJson} />}
      </div>
    </>
  );
};

export default EscapeJSON;
