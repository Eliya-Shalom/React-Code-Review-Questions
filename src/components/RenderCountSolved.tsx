// Solution: useRef
import { useEffect, useRef, useState } from "react";

export function RenderCountSolved(props: {}) {
  const [inputValue, setInputValue] = useState("");
  const [clicks, setClicks] = useState(0);

  const rendersRef = useRef(0);

  useEffect(() => {
    rendersRef.current++;
  });

  return (
    <div>
      Renders: {rendersRef.current || 1} <br />
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <br />
      <button onClick={() => setClicks(clicks + 1)}>Click</button>
    </div>
  );
}
