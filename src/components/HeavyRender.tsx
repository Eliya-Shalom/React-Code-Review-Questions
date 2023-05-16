import { useMemo, useState } from "react";

// Fix the performance issue when rendering a long list of items while typing in the input
// Solution: useMemo / useRef
export function HeavyRender(props: {}) {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} /> <br />
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
