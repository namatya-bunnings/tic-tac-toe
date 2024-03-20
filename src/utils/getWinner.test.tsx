import { getWinner } from "../utils/getWinner";

describe("get winner", () => {
  it("returns null when all the squares on the board are empty", () => {
    const squareValues = [null, null, null, null, null, null, null, null, null];
    expect(getWinner({ squareValues })).toBe(null);
  });
  it("returns winner when the one of the rows of the board has same 'X' or 'O' values", () => {
    const squareValues = ["X", "X", "X", null, null, null, null, null, null];
    expect(getWinner({ squareValues })).toBe("X");
  });
  it("returns winner when the one of the diagonal of the board has same 'O' or 'X' values", () => {
    const squareValues = ["O", null, null, null, "O", null, null, null, "O"];
    expect(getWinner({ squareValues })).toBe("O");
  });
  it("returns winner when the one of the column of the board has same 'X' or 'O' values", () => {
    const squareValues = [null, null, "X", "O", null, "X", null, "O", "X"];
    expect(getWinner({ squareValues })).toBe("X");
  });
  it("returns null when there is no winner", () => {
    const squareValues = ["O", "X", "O", "O", "X", "O", "X", "O", "X"];
    expect(getWinner({ squareValues })).toBe(null);
  });
});
