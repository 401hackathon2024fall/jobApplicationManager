import Header from "./Components/Header/Header";
import Resume from "./Components/Resume/Resume";
import AddJob from "./Components/AddJob/AddJob";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path='*/' element = {<AddJob/>}/>
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <AddJob />
    </Router>
    
  );
}

export default App;
