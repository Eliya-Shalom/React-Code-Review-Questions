import { Filter } from "./components/Filter";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HeavyRender } from "./components/HeavyRender";
import { RenderCountSolved } from "./components/RenderCountSolved";
import { RenderCount } from "./components/RenderCount";
import { HeavyRenderSolved } from "./components/HeavyRenderSolved";
import { FilterSolved } from "./components/FilterSolved";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span>Optimization:</span>
          <div style={{ display: "flex", gap: 10 }}>
            <Link to="/render-count">Render Count</Link>/
            <Link to="/render-count-solved">Solved</Link> |
            <Link to="/heavy-render">Heavy Render</Link>/
            <Link to="/heavy-render-solved">Solved</Link> |
            <Link to="/filter">Filter</Link>/
            <Link to="/filter-solved">Solved</Link>
          </div>
        </nav>
        <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span>Refactoring:</span>
          <div style={{ display: "flex", gap: 10 }}></div>
        </nav>
        <div style={{ borderTop: "solid #f8f8f8 5px", paddingTop: 20 }}>
          <Routes>
            <Route path="/filter" element={<Filter />} />
            <Route path="/filter-solved" element={<FilterSolved />} />
            <Route path="/heavy-render" element={<HeavyRender />} />
            <Route
              path="/heavy-render-solved"
              element={<HeavyRenderSolved />}
            />
            <Route path="/render-count" element={<RenderCount />} />
            <Route
              path="/render-count-solved"
              element={<RenderCountSolved />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
