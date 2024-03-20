type WinnerProps = {
  squareValues: (string | null)[];
};

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const getWinner = ({ squareValues }: WinnerProps) => {
  if (!squareValues) {
    return null;
  }
  let winner = null as string | null;

  winningCombinations.forEach((combo) => {
    const [x, y, z] = combo;
    if (
      squareValues[x] &&
      squareValues[x] === squareValues[y] &&
      squareValues[x] === squareValues[z]
    )
      winner = squareValues[x];
  });
  return winner;
};
