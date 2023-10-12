import { useMemo, useState } from "react";
import classes from "./BmiCalc.module.css";
const BmiCalc = () => {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(150);

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <main>
      <h1>Project 7: BMI CALCULATOR</h1>
      <div class={classes["input-selection"]}>
        <p class={classes["slider-output"]}>Weight: {weight} kg</p>
        <input
          class={classes["input-slider"]}
          type="range"
          step="1"
          min="40"
          max="220"
          onChange={(event) => setWeight(event.target.value)}
        ></input>
        <p class="slider-output">Height: {height} cm</p>
        <input
          class="input-slider"
          type="range"
          min="140"
          max="220"
          onChange={(event) => setHeight(event.target.value)}
        ></input>
      </div>
      <div class={classes["output-section"]}>
        <p>Your BMI is</p>
        <p class={classes["output"]}>{output}</p>
      </div>
    </main>
  );
};

export default BmiCalc;
