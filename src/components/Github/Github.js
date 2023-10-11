import ListItem from "./ListItem";
import classes from "./Github.module.css";
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

const Github = () => {
  const [items, setItems] = useState([]);

  const submitHandler = (data) => setItems([...data]);

  return (
    <>
      <h1>Project 5: GitHub User Search</h1>
      <div className={classes.container}>
        <InputForm onSubmit={submitHandler} />
        {items.length === 0 && (
          <p style={{ color: "grey" }}>
            Search something to display the result
          </p>
        )}
        {items.length !== 0 &&
          items.map((item) => <ListItem key={item.id} item={item} />)}
      </div>
    </>
  );
};

export default Github;
