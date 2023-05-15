// useMemo
// useCallback
// useRef
// filter exercise - debouncing
// code decoration - inline function to function declaration

import { MyFilter } from "./components/MyFilter";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MyHeavyRender } from "./components/Render";
import { Infinite } from "./components/Infinite";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <nav>
          Optimization
          <div style={{ display: "flex", gap: 10 }}>
            <Link to="/">Home</Link> |<Link to="/filter">Filter</Link> |
            <Link to="/heavy-render">Heavy Render</Link> |
            <Link to="/infinite">Infinite</Link>
          </div>
        </nav>
        <div style={{ paddingTop: 20 }}>
          <Routes>
            <Route path="/" exact element={<div />} />
            <Route path="/filter" element={<MyFilter />} />
            <Route path="/heavy-render" element={<MyHeavyRender />} />
            <Route path="/infinite" element={<Infinite />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
