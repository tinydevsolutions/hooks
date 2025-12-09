import { useRef, useState, useEffect } from "react";

export default function RenderCounter() {
  const renderCount = useRef(1); // store value secretly
  const [count, setCount] = useState(0);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div>
      <h3>Button clicked: {count}</h3>
      <h3>Component Rendered: {renderCount.current} times</h3>

      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
