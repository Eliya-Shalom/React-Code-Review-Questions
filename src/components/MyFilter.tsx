import { useCallback, useRef, useState } from "react";
import _ from "lodash";
// Advanced: implement a filter that filters a long list of strings

// solution 1: debounce
// solution 2: submit button / enter key
export function MyFilter() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<string[]>(myLongArray);

  // we are using ref to store the value of the input in order to avoid the re-creation of the filter function on change of the input.
  // recreating the filter function will cause the 'debounce' to be reset.
  const valueRef = useRef("");

  const handleChange = (e) => {
    setValue(e.target.value);
    valueRef.current = e.target.value;
    filter();
  };

  const filter = useCallback(
    _.debounce(() => {
      console.log("FILTER");
      const value = valueRef.current;
      const newResult = myLongArray.filter((item) => item.includes(value));
      setResult(newResult);
    }, 1000) as Function,
    []
  );

  return (
    <div>
      <label>Filter: </label>
      <input value={value} onChange={handleChange} />
      <br />
      <h3>Results</h3>
      <ul>
        {result.map((item, index) => (
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
