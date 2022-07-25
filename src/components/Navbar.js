import React from "react";
// import logo from "../img/logo512.png"

export default function Navbar() {
  return (
    <nav>
      <div className="nav__logo">
        <img src="/img/logo192.png" className="nav--icon" />
        <h3 className="nav--logo_text">ReactFacts</h3>
      </div>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
