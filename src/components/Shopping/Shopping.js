import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ShoppingItems from "./ShoppingItems";
import classes from "./Shopping.module.css";

const Shopping = () => {
  const [items, setItems] = useState([]);
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    setItems([...items, { id: uuidv4(), value: inputRef.current.value }]);
    inputRef.current.value = "";
  };

  const clickHandler = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1>Project 4: Shopping List</h1>
      <div className={classes.container}>
        <h2>Items To Buy</h2>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Add a new item" ref={inputRef} />
          <input type="submit" value="Submit" />
        </form>
        {items.length !== 0 ? (
          <ShoppingItems items={items} onRemove={(id) => clickHandler(id)} />
        ) : (
          <p>No records to display</p>
        )}
      </div>
    </>
  );
};

export default Shopping;
