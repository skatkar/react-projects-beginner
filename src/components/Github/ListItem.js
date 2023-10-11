import classes from "./ListItem.module.css";
const ListItem = (props) => {
  const item = props.item;
  return (
    <div class={classes.user}>
      <img src={item.avatar_url} alt="Profile" width="50" height="50" />
      <a href={item.html_url} target="_blank" rel="noopener noreferrer">
        {item.login}
      </a>
    </div>
  );
};

export default ListItem;
