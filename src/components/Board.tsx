import React from "react";
import SquareBox from "./SquareBox";
import "./Board.css";

const Board = () => {
  return (
    <div className="container">
      <h2>Tic-Tac-Toe</h2>
      <div className="row">
        <SquareBox />
        <SquareBox value={squareValues[1]} />
        <SquareBox value={squareValues[2]} />
      </div>
      <div className="row">
        <SquareBox value={squareValues[3]} />
        <SquareBox value={squareValues[4]} />
        <SquareBox value={squareValues[5]} />
      </div>
      <div className="row">
        <SquareBox value={squareValues[6]} />
        <SquareBox value={squareValues[7]} />
        <SquareBox value={squareValues[8]} />
      </div>
    </div>
  );
};

export default Board;
