export function SortButton({ isAscending, setIsAscending, twcss }) {
  let sortButtonDescription;
  if (isAscending) {
    sortButtonDescription = "Moves in descending order";
  } else {
    sortButtonDescription = "Moves in ascending order";
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
      className={"sort-button " + twcss}
      type="button"
      onClick={() => handleSort(isAscending)}
    >
      {sortButtonDescription}
    </button>
  );
}