"use client";
import { useState } from "react";

export default function Home() {
  // let score = 0;
  // const scoreState = useState();
  const [score, setScore] = useState(1);
  // console.log(scoreState);

  function addToScore() {
    // score++;
    // setScore(score + 1);
    // console.log(score);
    setScore(function (value) {
      return value + 1;
    });
  }

  // console.log(score);

  function doublePoints() {
    addToScore();
    addToScore();
  }

  return (
    <main>
      <h1>Home</h1>
      <div>
        <button onClick={addToScore}>Add 1</button>
        <button onClick={doublePoints}>Add 2</button>
        <p>Score: {score}</p>
      </div>
    </main>
  );
}
