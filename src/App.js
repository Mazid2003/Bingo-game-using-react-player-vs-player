import "./App.css";
import React, { useState, useEffect } from "react";

// Function to generate the Bingo board with random numbers
const generateBoard = () => {
  let numbers = Array.from({ length: 25 }, (_, i) => i + 1);
  numbers.sort(() => Math.random() - 0.5);
  return Array.from({ length: 5 }, (_, i) => numbers.slice(i * 5, i * 5 + 5));
};

const checkLines = (board) => {
  let lines = 0;

  // Check rows & columns
  for (let i = 0; i < 5; i++) {
    if (board[i].every((num) => num === "X")) lines++;
    if (board.map((row) => row[i]).every((num) => num === "X")) lines++;
  }

  // Check diagonals
  if ([0, 1, 2, 3, 4].every((i) => board[i][i] === "X")) lines++;
  if ([0, 1, 2, 3, 4].every((i) => board[i][4 - i] === "X")) lines++;

  return lines;
};

export default function BingoGame() {
  const [player1Board, setPlayer1Board] = useState(generateBoard());
  const [player2Board, setPlayer2Board] = useState(generateBoard());
  const [calledNumbers, setCalledNumbers] = useState([]);
  const [turn, setTurn] = useState("player1");
  const [winner, setWinner] = useState(null);

  const markNumber = (board, num) => {
    return board.map((row) => row.map((val) => (val === num ? "X" : val)));
  };

  const playerMove = (num) => {
    if (!calledNumbers.includes(num)) {
      setCalledNumbers([...calledNumbers, num]);
      setPlayer1Board(markNumber(player1Board, num));
      setPlayer2Board(markNumber(player2Board, num));
      setTurn("player2");
    }
  };

  const player2Move = (num) => {
    if (!calledNumbers.includes(num)) {
      setCalledNumbers([...calledNumbers, num]);
      setPlayer1Board(markNumber(player1Board, num));
      setPlayer2Board(markNumber(player2Board, num));
      setTurn("player1");
    }
  };

  const restartGame = () => {
    setPlayer1Board(generateBoard());
    setPlayer2Board(generateBoard());
    setCalledNumbers([]);
    setTurn("player1");
    setWinner(null);
  };

  useEffect(() => {
    let player1Lines = checkLines(player1Board);
    let player2Lines = checkLines(player2Board);

    if (player1Lines >= 5) setWinner("Player 1");
    if (player2Lines >= 5) setWinner("Player 2");
  }, [player1Board, player2Board]);

  return (
    <div className="p-5 text-center">
      <h1 className="text-2xl font-bold">🎉 Bingo Game 🎉</h1>
      {winner ? <h2 className="text-xl font-bold mt-3">{winner} Wins! 🏆</h2> : null}
      <div className="grid grid-cols-2 gap-5 mt-5">
        {turn === "player1" ? (
          <Board
            title="Player 1's Board"
            board={player1Board}
            onNumberClick={playerMove}
          />
        ) : (
          <Board
            title="Player 2's Board"
            board={player2Board}
            onNumberClick={player2Move}
          />
        )}
      </div>
      <button className="restart-button mt-5" onClick={restartGame}>
        🔄 Restart Game
      </button>
    </div>
  );
}

const Board = ({ title, board, onNumberClick }) => (
  <div className="border p-4 rounded-lg bg-gray-100">
    <h2 className="text-lg font-bold mb-2">{title}</h2>
    <div className="grid grid-cols-5 gap-1">
      {board.flat().map((num, i) => (
        <button
          key={i}
          className={`w-12 h-12 text-lg font-bold rounded ${
            num === "X" ? "bg-green-500 text-white" : "bg-white"
          }`}
          onClick={onNumberClick ? () => onNumberClick(num) : null}
          disabled={num === "X"} // Disable if the number is already marked
        >
          {num}
        </button>
      ))}
    </div>
  </div>
);
