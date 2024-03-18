import React, { useState } from "react";
import "./Home.css";
import Square from "./Square";
const renderFrom = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const Home = () => {
  const [gameState, setGameState] = useState(renderFrom);
  return (
    <div className="main-div">
      <div className="move-detection">
        <div className="left">Yourself</div>
        <div className="right">Opponent</div>
      </div>

      <div>
        <h1 className=" game-heading water-background">Tic Tac Toe</h1>
        <div className="square-wrapper">
          {gameState.map((arr) =>
            arr.map((e) => {
              return <Square key={e} id={e} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
