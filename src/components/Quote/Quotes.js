import { useEffect, useState } from "react";
import classes from "./Quotes.module.css";
import Quote from "./Quote";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        //setQuote(json[0]);
      });
  }, []);

  const clickHandlder = () => {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(randomNumber);
  };

  return (
    <>
      <h2>Project 3: Quote Generator</h2>
      <div className={classes.container}>
        <div className={classes.card}>
          <Quote
            text={quotes[quoteIndex]?.text}
            author={quotes[quoteIndex]?.author}
            clickHandler={clickHandlder}
          />
        </div>
      </div>
    </>
  );
};

export default Quotes;
