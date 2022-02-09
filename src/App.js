import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Header />
        </div>
      </div>
    </Router>
  );
}

export default App;
