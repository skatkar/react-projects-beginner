import { useState } from "react";
import classes from "./Question.module.css";

const Question = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <section>
      <div class={classes.question}>
        <h4>{props.title}</h4>
        <button onClick={clickHandler}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <p>{props.description}</p>}
    </section>
  );
};

export default Question;
