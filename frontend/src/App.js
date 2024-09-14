import Header from "./Components/Header/Header";
import Resume from "./Components/Resume/Resume";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
