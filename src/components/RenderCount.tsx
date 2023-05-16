import { useState } from "react";

// Implement a component that shows the number of renders
export function RenderCount(props: {}) {
  const [inputValue, setInputValue] = useState("");
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      Renders: {0} <br />
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <br />
      <button onClick={() => setClicks(clicks + 1)}>Click</button>
    </div>
  );
}
