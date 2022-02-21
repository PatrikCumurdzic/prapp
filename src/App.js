import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Records from "./components/Records";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
          <Leaderboard />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
