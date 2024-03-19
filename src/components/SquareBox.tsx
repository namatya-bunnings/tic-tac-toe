import React from "react";
import "./SquareBox.css";

type SquareBoxTypes = {
  value: string | null;
  handleClick: () => void;
};

const SquareBox = ({ value, handleClick }: SquareBoxTypes) => {
  return (
    <button className="square-box" onClick={handleClick}>
      {value}
    </button>
  );
};

export default SquareBox;
