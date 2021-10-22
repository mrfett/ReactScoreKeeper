import { useState } from "react";
import "./styles.css";

const name = "Fencer Name";
const defaultState = {
  time: 3 * 60 * 1000,
  fencerA: {
    id: 0,
    name: "John Smith",
    score: 0,
    cards: 0,
    priority: 0
  },
  fencerB: {
    id: 1,
    name: "Will Smith",
    score: 0,
    cards: 0,
    priority: 0
  }
};

export default function App() {
  const [state, updateState] = useState(defaultState);

  const incrementScore = (score, direction) => {
    const tempState = { ...state };
    tempState.fencerA.score = score + 1;
    console.log("fencer.score", tempState.fencerA.score);
    updateState(tempState);
  };

  const resetBout = () => {
    console.log("Resetting...");
    // [state] = defaultState;
  };

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <div className="fencer a">
        <h2>{state.fencerA.name}</h2>
        <button onClick={() => incrementScore(state.fencerA.score++, "up")}>
          {state.fencerA.score}
        </button>
      </div>
      <div className="fencer b">
        <h2>{state.fencerB.name}</h2>
        <h3>{state.fencerB.score}</h3>
      </div>
      <div className="Timer">{state.time}</div>
      <button onClick={() => resetBout()}>Reset</button>
    </div>
  );
}
