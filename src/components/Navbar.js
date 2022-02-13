import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="one" href="/#">
        <span>PERSONAL RECORDS</span>
      </a>
      <a className="two" href="/#">
        <span>LEADERBOARD</span>
      </a>
      <a href="/#" className="three">
        <span>PROFILE</span>
      </a>
    </nav>
  );
};

export default Navbar;
