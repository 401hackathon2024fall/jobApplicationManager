import Header from "./Components/Header/Header";
import Resume from "./Components/Resume/Resume";
import AddJob from "./Components/AddJob/AddJob";
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function AppContent() {
  const location = useLocation(); 

  return (
    <div>
      <Header />

      <div style={location.pathname === "/resume" ? { padding: "20px" } : {}}>
        <Routes>
          <Route path="/" element={<AddJob />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent /> {/* Use a component where useLocation can be used */}
    </Router>
  );
}

export default App;