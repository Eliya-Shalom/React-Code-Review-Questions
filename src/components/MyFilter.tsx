import { useCallback, useState } from "react";
import _ from "lodash";
// Advanced: implement a filter that filters a long list of strings

// Solution 1: debounce > useCallback + useRef
// Solution 2: submit button / enter key
export function MyFilter() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(myLongArray);

  const handleChange = (e) => {
    setValue(e.target.value);
    debouncedFilter(e.target.value);
  };

  const debouncedFilter = useCallback(
    _.debounce((value: string) => {
      console.log("!filtering");
      setResult(myLongArray.filter((item) => item.includes(value)));
    }, 1000) as (value: string) => void,
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

const myLongArray = new Array(1000).fill(0).map(() => getRandomString());
