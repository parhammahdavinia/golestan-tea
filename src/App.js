import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h1>404 ERROR</h1>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
