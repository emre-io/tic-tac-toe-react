export function Square({ id, value, onSquareClick, winning = false }) {
  let squareClass = "square" + (winning ? " winning-square" : "");

  return (
    <button
      type="button"
      title={"Select square # " + id}
      key={id}
      id={id}
      className={squareClass + " text-7xl md:text-9xl"}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}