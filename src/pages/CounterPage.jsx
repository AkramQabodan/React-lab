import { useState } from "react";
import Button from "./+/-Button/Button";
import DisplayCounter from "./DisplayCounter/DisplayCounter";
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
    <>
      <DisplayCounter counter={counter} />
      <Button type="+" func={increaseCounter}></Button>
      <Button type="-" func={decreaseCounter}></Button>
    </>
  );
};
export default CounterPage;
