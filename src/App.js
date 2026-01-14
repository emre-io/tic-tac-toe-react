import { useState } from "react";
import { Board } from "components/Board"
import { calculateWinner } from "components/util";
import { SortButton } from "components/Sort";
import { SubmitButton } from "components/Submit";
import { SelectMove } from "components/SelectMove";


export default function Game() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), index: -1 },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;
  const [selectedMove, setSelectedMove] = useState(-1);

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
    setSelectedMove(-1);
  }

  const winnerInfo = calculateWinner(currentSquares);
  const winner = winnerInfo ? winnerInfo[0] : null;
  const winningLine = winnerInfo ? winnerInfo[1] : [];

  let status;
  if (winner) {
    status = "Winner is " + winner + ".";
    // filter null
  } else if (currentSquares.filter((x) => !!x).length == 9) {
    status = "It is a draw.";
  } else {
    status = "Next player is " + (xIsNext ? "X" : "O") + ".";
  }

  const moves = history.map((turnInfo, move) => {
    let description;
    if (move === 0) {
      description = "Go to game start";
    } else if (move > 0) {
      const row = Math.floor(turnInfo.index / 3);
      const col = turnInfo.index % 3;
      const symbol = turnInfo.index % 2 === 0 ? "X" : "O";
      description =
        "Go to move #" + move + " - " + symbol + "(" + row + ", " + col + ")";
    }
    return (
      <option key={move} value={move}>
        {description}
      </option>
    );
  });
  // Add default option.
  moves.unshift(
    <option key={"id" + Math.random().toString(16).slice(2)}>
      {" "}
      Select move to go{" "}
    </option>
  );
  // Delete option for You are at move # move.
  if (moves.length > 0) moves.splice(moves.length - 1, 1);

  return (
    <>
      <div
        className="h-screen w-screen 
          grid grid-rows-12 grid-cols-12"
      >
        <div
          className="pb-2 self-end
            row-start-4 row-end-5 
            col-start-2 col-end-12
            md:col-start-5 md:col-end-9"
        >
          <div className="text-3xl md:text-5xl text-center">Tic-Tac-Toe</div>
        </div>
        <div
          className="size-full self-center relative
          row-start-5 row-end-9 
          col-start-2 col-end-12
          md:col-start-5 md:col-end-9"
        >
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            winningLine={winningLine}
            onPlay={handlePlay}
          />
        </div>
        <div
          className="pt-2 self-start
          row-start-9 row-end-10
          col-start-2 col-end-12
          md:col-start-4 md:col-end-10"
        >
          <div
            className="text-center
            text-2xl 
            md:text-3xl md:pb-2"
          >
            {status}
          </div>
          <div
            className="text-center pb-2
            text-2xl 
            md:text-3xl"
          >
            {currentMove > 0
              ? "You are at move #" + currentMove + "."
              : "Make your first move."}
          </div>
          <div
            className="text-center pb-2
            text-2xl 
            md:text-3xl"
          >
            <SelectMove
              moves={moves}
              selectedMove={selectedMove}
              setSelectedMove={setSelectedMove}
              isAscending={isAscending}
            />
          </div>
          <div
            className="text-center pb-2
            text-2xl 
            md:text-3xl"
          >
            <SortButton
              className="sort-button"
              isAscending={isAscending}
              setIsAscending={setIsAscending}
              twcss="mb-2 md:mr-14"
            />
            <SubmitButton selectedMove={selectedMove} jumpTo={jumpTo} />
          </div>
        </div>
      </div>
    </>
  );
}