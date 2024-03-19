import React from "react";
import SquareBox from "./SquareBox";
import "./Board.css";

const Board = () => {
  const [squareValues, setSquareValues] = React.useState<string[] | null[]>(
    Array(9).fill(null)
  );

  const handleClick = (i: number) => {
    const newArrayValue = [...squareValues];
    if (newArrayValue[i]) {
      return;
    }
    newArrayValue[i] = "X";
    setSquareValues(newArrayValue as string[] | null[]);
  };

  return (
    <div className="container">
      <h2>Tic-Tac-Toe</h2>
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
