import classes from "./ListItem.module.css";
const ListItem = (props) => {
  const string = props.escapedString;
  return (
    <textarea rows={40} cols={80}>
      {string}
    </textarea>
  );
};

export default ListItem;
