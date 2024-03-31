import { useState } from "react";

function Square({ value, onSquareClick, winning = false }) {
  let squareClass = "square " + (winning ? "winning-square " : "");

  return (
    <button className={squareClass} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares, i);
  }

  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo ? winnerInfo[0] : null;
  const winningLine = winnerInfo ? winnerInfo[1] : [];

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (squares.filter((x) => !!x).length == 9) {
    // filter null
    status = "Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onSquareClick={() => handleClick(i)}
        winning={winningLine.includes(i)}
      />
    );
  }

  let boardSquares = [];
  for (let row = 0; row < 3; row++) {
    let boardRow = [];
    for (let col = 0; col < 3; col++) {
      boardRow.push(
        <span key={row * 3 + col}>{renderSquare(row * 3 + col)}</span>
      );
    }
    boardSquares.push(
      <div className="board-row" key={row}>
        {boardRow}
      </div>
    );
  }

  return (
    <>
      <div className="status text-sm text-center">{status}</div>
      <>{boardSquares}</>
    </>
  );
}

function SortButton({ isAscending, setIsAscending }) {
  let sortButtonDescription;
  if (isAscending) {
    sortButtonDescription = "Sort in descending order";
  } else {
    sortButtonDescription = "Sort in ascending order";
  }

  function handleSort(isAscending) {
    if (isAscending) {
      setIsAscending(false);
    } else {
      setIsAscending(true);
    }
  }

  return (
    <button
      className="text-sm bg-desc-button-col rounded px-2 py-1 mb-2"
      onClick={() => handleSort(isAscending)}
    >
      {sortButtonDescription}
    </button>
  );
}

export default function Game() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), index: -1 },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  let [isAscending, setIsAscending] = useState(0);

  function handlePlay(nextSquares, i) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, index: i },
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    const nextHistory = [...history.slice(0, nextMove + 1)];
    setHistory(nextHistory);
    setCurrentMove(nextMove);
  }

  // squares are elements of history and move are indexes
  const moves = history.map((turnInfo, move) => {
    let description;
    if (move === 0) {
      description = "Go to game start";
    } else if (move === currentMove) {
      description = "You are at move #" + move;
    } else if (move > 0) {
      const row = Math.floor(turnInfo.index / 3);
      const col = turnInfo.index % 3;
      const symbol = turnInfo.index % 2 === 0 ? "X" : "O";
      description =
        "Go to move #" + move + " - " + symbol + "(" + row + ", " + col + ")";
    }
    if (move === currentMove) {
      return (
        <li key={move}>
          <p className="inline-block text-sm bg-desc-button-col rounded px-2 py-1 mt-2">
            {description}
          </p>
        </li>
      );
    } else {
      return (
        <li key={move}>
          <button
            className="text-sm bg-timetravel-button-col rounded px-2 py-1 mt-2"
            onClick={() => jumpTo(move)}
          >
            {description}
          </button>
        </li>
      );
    }
  });

  return (
    <div className="game flex justify-evenly">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info py-2 ">
        <SortButton isAscending={isAscending} setIsAscending={setIsAscending} />
        <ol>{isAscending ? moves : moves.slice().reverse()}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }
  return null;
}
