import classes from "./ListItem.module.css";
const ListItem = (props) => {
  const string = props.escapedString;
  return <div className={classes.user}>{string}</div>;
};

export default ListItem;
