import { useState } from "react";
import "./CounterPage.css";
import Button from "../../Components/Button/Button";
import DisplayCounter from "../../Components/DisplayCounter/DisplayCounter";
const CounterPage = () => {
  let [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="container">
      <DisplayCounter counter={counter} />
      <section className="buttons">
        <Button
          className="button increase"
          type="+"
          func={increaseCounter}
        ></Button>
        <Button
          className="button decrease"
          type="-"
          func={decreaseCounter}
        ></Button>
      </section>
    </div>
  );
};
export default CounterPage;
