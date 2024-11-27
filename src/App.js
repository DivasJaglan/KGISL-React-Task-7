import { useState } from "react";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [guessdNumber, setGuessdNumber] = useState(1);
  let [feedback, setFeedback] = useState("Generate a random number");
  function generateRandomNumber() {
    setRandomNumber(Math.trunc(Math.random() * 20) + 1);
  }
  function checkNumber() {
    if (guessdNumber < randomNumber) {
      setFeedback("Too low");
    } else if (guessdNumber > randomNumber) {
      setFeedback("Too high");
    } else {
      setFeedback("Correct");
    }
  }

  return (
    <div className="App d-flex justify-content-center align-items-center">
      <div className="container w-25 text-center border border-3 border-opacity-25  border-black rounded-4 d-flex flex-column gap-3">
        <h1>Guess the Number</h1>

        <input
          className="text-center w-25 align-self-center"
          type="number"
          min={1}
          max={20}
          value={guessdNumber}
          onChange={(e) => setGuessdNumber(+e.target.value)}
        />
        <h4
          className={`${
            feedback === "Correct" ? "bg-success" : "bg-danger"
          } w-50 align-self-center p-1 rounded-3`}
        >
          {feedback}
        </h4>
        <div className="d-flex justify-content-around p-2">
          <button className="rounded-3" onClick={generateRandomNumber}>
            Generate Number
          </button>
          <button className="rounded-3" onClick={checkNumber}>
            Guess Number
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
