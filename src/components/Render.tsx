import { useState } from "react";

// Render long list of items, bad user experience when typing in the input and when clicking the button
// Solution: useMemo
export function MyRender(props: {}) {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

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
      <ul>
        {myLongArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function getRandomString() {
  return Math.random().toString(36).substring(2);
}

const myLongArray = new Array(15000).fill(0).map(() => getRandomString());
