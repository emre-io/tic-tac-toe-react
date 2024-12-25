# Tic-tac-toe

## Demo 
<div class="row">
  <div class="column">
    <img 
      src="demo/demo-screenshot-mobile-tic-tac-toe.png" 
      alt="Mobile demo Tic Tac Toe"
    />
  </div>
  <div class="column">
    <img 
      src="demo/demo-screenshot-pc-tic-tac-toe.png" 
      alt="PC demo Tic Tac Toe"
    />
  </div>
</div>

<style>
.row {
  display: flex;
  gap: 10px;
}

.column {
  height: 370px;
}
</style>

## Where does this code came from?

The base for this project was devloped while completing tic-tac-toe [tutorial](https://react.dev/learn/tutorial-tic-tac-toe) for react on Mar 31 24.
Additional features and improvements mentioned at the end of the tutorial are also implemented.

## Setup

Open the project root directory and then install the dependencies via `pnpm install`. Then use `pnpm start` to start a local server and follow the prompts to view the code running in a browser.

## Features/Improvements

1. For the current move only, show “You are at move #…” instead of a button.
2. Rewrite Board to use two loops to make the squares instead of hardcoding them.
3. Add a toggle button that lets you sort the moves in either ascending or descending order.
4. When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw).
5. Display the location for each move in the format (row, col) in the move history list.

## References
*https://seanaujong.medium.com/implementing-the-react-tic-tac-toe-challenges-ed57d7ae4f67*
