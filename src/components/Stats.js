export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding Items To Your Packing List ✈️</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list and you have packed {numPacked}
      </em>
    </footer>
  );
}
