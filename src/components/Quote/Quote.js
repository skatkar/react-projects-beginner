import classes from "./Quote.module.css";

const Quote = (props) => {
  return (
    <>
      <h3>"{props.text}</h3>
      <p className={classes.author}>- {props.author}</p>
      <button type="button" onClick={props.clickHandler}>
        Next Quote
      </button>
    </>
  );
};

export default Quote;
