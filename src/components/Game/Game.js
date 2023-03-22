import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function handleSubmitGuesses(tentativeGuess) {
    console.log("received tentativeGuess", tentativeGuess);
    setGuesses([...guesses, tentativeGuess]);
  }
  return (
    <>
      <GuessInput handleSubmitGuesses={handleSubmitGuesses} />
      <GuessResults guesses={guesses} />
    </>
  );
}

export default Game;
