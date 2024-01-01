import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [highLight, setHighLight] = useState(1);
  const [close, setClose] = useState(false);

  function Next() {
    if (highLight < 3) {
      setHighLight((s) => s + 1);
    }
  }

  function Previous() {
    if (highLight > 1) {
      setHighLight((s) => s - 1);
    }
  }

  return (
    <>
      <div className="close" onClick={() => setClose((c) => !c)}>
        x
      </div>

      <div className={`steps ${close && "hidden"}`}>
        <div className="numbers">
          <div className={highLight >= 1 ? "active" : ""}>1</div>
          <div className={highLight >= 2 ? "active" : ""}>2</div>
          <div className={highLight >= 3 ? "active" : ""}>3</div>
        </div>

        <p className="message">
          Step {highLight} :
          {highLight === 1
            ? messages[highLight - 1]
            : highLight === 2
            ? messages[highLight - 1]
            : messages[highLight - 1]}
        </p>
        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={Previous}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={Next}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
