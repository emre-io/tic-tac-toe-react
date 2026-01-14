export function SubmitButton({ selectedMove, jumpTo }) {
  return (
    <button
      className="timetravel-button"
      type="submit"
      disabled={selectedMove < 0}
      onClick={() => jumpTo(selectedMove)}
    >
      Submit
    </button>
  );
}