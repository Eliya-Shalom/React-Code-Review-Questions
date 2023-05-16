import { useCallback, useState } from "react";
import _ from "lodash";

// Solution: debounce, useCallback, lodash

export function FilterSolved() {
  const [value, setValue] = useState("");
  const [list, setList] = useState(myLongArray);

  const handleChange = (e) => {
    setValue(e.target.value);
    debouncedFilter(e.target.value);
  };

  const debouncedFilter = useCallback(
    _.debounce((value: string) => {
      console.log("!filtering");
      setList(myLongArray.filter((item) => item.includes(value)));
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
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const getRandomString = () => Math.random().toString(36).substring(2);

const myLongArray = new Array(15000).fill(0).map(() => getRandomString());
