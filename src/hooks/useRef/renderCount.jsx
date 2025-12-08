import React, { useRef, useState, useEffect } from "react";

const RenderCounter = () => {
  const countRef = useRef(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    countRef.current += 1;
  });

  return (
    <div className="p-4 space-y-3">
      <input
        type="text"
        className="border p-2"
        placeholder="Type anything"
        onChange={(e) => setValue(e.target.value)}
      />

      <p>Component Render Count: {countRef.current}</p>
    </div>
  );
};

export default RenderCounter;
