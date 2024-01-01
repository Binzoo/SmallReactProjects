import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(0);
  const date = new Date();

  function up() {
    setNum((n) => n + Number(count));
    dateLogic();
  }

  function down() {
    setNum((n) => n - Number(count));
    dateLogic();
  }

  function dateLogic() {
    const realDate = new Date(date);
    realDate.setDate(realDate.getDate() + num);
    console.log(typeof realDate.getDate() + num);
    date.setDate(
      String(realDate).replace(
        "00:00:00 GMT+0200 (South Africa Standard Time)",
        ""
      )
    );
  }

  function resetButton() {
    setCount(1);
    setNum(0);
    date.setDate("Fri Feb 01 2002");
  }

  function inputNum(e) {
    setNum(Number(e.target.value));
    if (e.target.value == 0) {
      console.log("im here");
      date.setDate("Fri Feb 01 2002");
    }
    dateLogic();
  }

  function rangeNum(e) {
    setCount(e.target.value);
  }

  return (
    <>
      <div>
        <p>{count}</p>
        <input type="range" min={0} max={10} onChange={rangeNum} />
        <button onClick={down}>-</button>
        <input type="number" value={num} onChange={inputNum} />
        <button onClick={up}>+</button>
      </div>
      <div>
        {num === 0
          ? `Today is Fri Feb 01 2002`
          : num > 0
          ? `${num} days from today is ${date}`
          : num < 0
          ? `${num} days before today is ${date}`
          : ""}
      </div>
      <button onClick={resetButton}>Reset</button>
    </>
  );
}

export default App;
