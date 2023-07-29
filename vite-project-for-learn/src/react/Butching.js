import * as React from "react";

const AppBatching = () => {
  const [counter, setCounter] = React.useState(42);
  const [clicked, setClicked] = React.useState(0);

  const handleCounter = (digit) => {
    setCounter(counter + digit);
    setClicked(clicked + 1);
  };

  console.log("component rendering");

  return (
    <div>
      <button type="button" onClick={() => handleCounter(1)}>
        Increase
      </button>
      <button
        type="button"
        onClick={() => {
          setCounter((state) => state + 1);
          setCounter((state) => state + 1);
          setCounter((state) => state + 1);
        }}
      >
        Decrease
      </button>

      <div>Counter: {counter}</div>
      <div>Clicked: {clicked}</div>
    </div>
  );
};

export default AppBatching;
