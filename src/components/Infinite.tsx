// Problem: Infinite render loop
// Solution: useRef
import { useEffect, useRef, useState } from "react";

export function Infinite(props: {}) {
  const [, setValue] = useState("");

  // const [renders, setRenders] = useState(0);
  const rendersRef = useRef<number | null>(0);

  useEffect(() => {
    // setRenders((renders) => renders + 1);
    rendersRef.current++;
  });

  return (
    <div>
      Renders: {rendersRef.current || 1} <br />
      <input onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
