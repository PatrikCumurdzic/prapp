import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Records from "./components/Records";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
          <Records />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
