import React, { useState } from "react";
import Square from "./Square.tsx";

const Board: React.FC = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState<boolean>(true);

  const handleClick = (index: number) => {
    if (state[index] !== null) {
      return; // to avoid re assign of X or O
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const checkDraw = () => {
    for (let i = 0; i < 9; i++) {
      if (state[i] === null) {
        return false;
      }
    }
    return true;
  };

  const isDraw = checkDraw();
  const isWinner = checkWinner();

  return (
    <div>
      <h1 className="make-center" style={{ color: "#8ca0e8" }}>
        Tic Tac Toe
      </h1>
      {isWinner || isDraw ? (
        <div>
          <h3 style={{ color: "#f8efdd" }}>
            {isWinner ? `${isWinner} is the Winner 🏆` : `Draw, No one Won`}
          </h3>
          <div className="make-center">
            <button onClick={() => setState(Array(9).fill(null))}>
              Play Again
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h4 className="make-center">
            Player {isXTurn ? "X" : "O"} please move
          </h4>
          <div>
            <div className="board-row">
              <Square value={state[0]} onClick={() => handleClick(0)} />
              <Square value={state[1]} onClick={() => handleClick(1)} />
              <Square value={state[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
              <Square value={state[3]} onClick={() => handleClick(3)} />
              <Square value={state[4]} onClick={() => handleClick(4)} />
              <Square value={state[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
              <Square value={state[6]} onClick={() => handleClick(6)} />
              <Square value={state[7]} onClick={() => handleClick(7)} />
              <Square value={state[8]} onClick={() => handleClick(8)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
