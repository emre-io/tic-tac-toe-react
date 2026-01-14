import { Square } from "./Square";
import { calculateWinner } from "./util";

export function Board({ xIsNext, squares, onPlay, winningLine }) {
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

  function renderSquare(i) {
    return (
      <Square
        key={i}
        id={i}
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
      boardRow.push(renderSquare(row * 3 + col));
    }
    boardSquares.push(
      <div key={row} className="board-row">
        {boardRow}
      </div>
    );
  } 
  return <div className="board">{boardSquares}</div>;
}