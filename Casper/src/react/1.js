// При каждом клике на кнопку Add должна появляться
// новая кнопка со случайным текстом (например цифровым id).
// При клике на появившуюся кнопку она должна удаляться.
import "../main";
import React, { useState } from "react";

function App() {
  const [arrowBtns, setArrowBtns] = useState([]);
  const add = () => {
    setArrowBtns((prevArrowBtns) => [...prevArrowBtns, Math.random()]);
  };
  const onDelete = (id) => {
    setArrowBtns((prevArrowBtns) =>
      prevArrowBtns.filter((item) => item !== id)
    );
  };

  return (
    <div className="wrapper">
      <button onClick={add}>Add</button>
      <div className="box-wrapper">
        <ul>
          {arrowBtns.map((item) => (
            <li key={item}>
              <button onClick={() => onDelete(item)}>{item}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
