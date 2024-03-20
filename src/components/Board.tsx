import React from "react";
import SquareBox from "./SquareBox";
import "./Board.css";
import { getWinner } from "../utils/getWinner";

const Board = () => {
  const [squareValues, setSquareValues] = React.useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const [isXFirst, setIsXFirst] = React.useState<boolean>(true);

  const gameWinner = getWinner({ squareValues });

  const handleClick = (i: number) => {
    const clonedSquareValues = [...squareValues];
    if (clonedSquareValues[i] || gameWinner) {
      return;
    }
    isXFirst ? (clonedSquareValues[i] = "X") : (clonedSquareValues[i] = "O");
    setSquareValues(clonedSquareValues as (string | null)[]);
    setIsXFirst(!isXFirst);
  };

  return (
    <div className="container">
      <h2>Tic-Tac-Toe</h2>
      {gameWinner && <p>Winner is {gameWinner}</p>}
      <div className="row">
        <SquareBox value={squareValues[0]} handleClick={() => handleClick(0)} />
        <SquareBox value={squareValues[1]} handleClick={() => handleClick(1)} />
        <SquareBox value={squareValues[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <SquareBox value={squareValues[3]} handleClick={() => handleClick(3)} />
        <SquareBox value={squareValues[4]} handleClick={() => handleClick(4)} />
        <SquareBox value={squareValues[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <SquareBox value={squareValues[6]} handleClick={() => handleClick(6)} />
        <SquareBox value={squareValues[7]} handleClick={() => handleClick(7)} />
        <SquareBox value={squareValues[8]} handleClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;
