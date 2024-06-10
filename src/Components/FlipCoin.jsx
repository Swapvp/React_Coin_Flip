import React, { useState } from "react";
import Coin from "./Coin";

const FlipCoin = ({
  coins = [
    {
      side: "head",
      imgSrc:
        "https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg",
    },
    {
      side: "tail",
      imgSrc:
        "https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg",
    },
  ],
}) => {
  const [currFace, setCurrFace] = useState(null);
  const [totalFlips, setTotalFlips] = useState(0);
  const [heads, setHeads] = useState(0);

  const choice = (arr) => {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
  };

  const flipCoin = () => {
    const newFace = choice(coins);
    setCurrFace(newFace);
    setTotalFlips(totalFlips + 1);
    if (newFace.side === "head") {
      setHeads(heads + 1);
    }
  };

  const handleClick = () => {
    flipCoin();
  };

  return (
    <div>
      <h2>Let's flip a coin</h2>
      {currFace && <Coin info={currFace} />}
      <button onClick={handleClick}>Flip Me!</button>
      <p>
        Out of {totalFlips} flips, there have been {heads} heads and{" "}
        {totalFlips - heads} tails
      </p>
    </div>
  );
};

export default FlipCoin;
