import { useState, useRef } from "react";

export default function Player() {

  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
    //this is a form of imperative programming, and when we use React
    //the main purpose in to write declarative code
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? " "}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
