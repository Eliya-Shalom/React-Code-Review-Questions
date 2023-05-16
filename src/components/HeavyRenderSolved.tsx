import { useMemo, useState } from "react";

// Solution: useMemo. This part of the node won't be re-created on every render.
export function HeavyRenderSolved(props: {}) {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  const renderList = useMemo(
    () => myLongArray.map((item, index) => <li key={index}>{item}</li>),
    []
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        width: "fit-content",
      }}
    >
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click</button> {count}
      <ul>{renderList}</ul>
    </div>
  );
}

function getRandomString() {
  return Math.random().toString(36).substring(2);
}

const myLongArray = new Array(15000).fill(0).map(() => getRandomString());
