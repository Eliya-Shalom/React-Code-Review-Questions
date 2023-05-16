import { useState } from "react";

// Performance issue when typing in the filter input

// 1. Define the problem
// 2. Find the cause
// 3. Implement a solution
export function Filter() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label>Filter: </label>
      <input value={value} onChange={handleChange} />
      <br />
      <h3>Results</h3>
      <ul>
        {myLongArray
          .filter((item) => item.includes(value))
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}

const getRandomString = () => Math.random().toString(36).substring(2);
const myLongArray = new Array(15000).fill(0).map(() => getRandomString());
