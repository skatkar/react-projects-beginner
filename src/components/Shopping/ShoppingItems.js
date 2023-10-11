import classes from "./ShoppingItems.module.css";

const ShoppingItems = (props) => {
  const items = props.items;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.value}</span>
          <button
            type="button"
            className={classes.delete}
            onClick={() => props.onRemove(item.id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ShoppingItems;
