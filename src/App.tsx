// useMemo
// useCallback
// useRef
// filter exercise - debouncing
// code decoration - inline function to function declaration

import { MyFilter } from "./components/MyFilter";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MyRender } from "./components/Render";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <nav>
          Optimization
          <div style={{ display: "flex", gap: 10 }}>
            <Link to="/">Home</Link> | <Link to="/filter">Filter</Link> |
            <Link to="/render">Render</Link>
          </div>
        </nav>
        <div style={{ paddingTop: 20 }}>
          <Routes>
            <Route path="/" exact element={<div />} />
            <Route path="/filter" element={<MyFilter />} />
            <Route path="/render" element={<MyRender />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
