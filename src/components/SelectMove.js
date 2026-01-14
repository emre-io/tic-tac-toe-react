export function SelectMove({
  moves,
  selectedMove,
  setSelectedMove,
  isAscending,
}) {
  const displayedMoves = isAscending
    ? moves
    : moves.slice(0, 1).concat(moves.slice(1).reverse());

  return (
    <select
      value={selectedMove}
      onChange={(e) => setSelectedMove(Number(e.target.value))}
      className="select-moves"
    >
      {displayedMoves}
    </select>
  );
}