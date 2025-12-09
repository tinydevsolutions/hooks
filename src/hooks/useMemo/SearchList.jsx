import React, { useState, useMemo } from "react";

function SearchList({ items }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    // console.log("Filtering...");
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, items]);

  return (
    <div>
      <input
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  );
}

export default SearchList;
