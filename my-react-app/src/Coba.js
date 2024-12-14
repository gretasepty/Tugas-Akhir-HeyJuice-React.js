import React, { useState } from "react";
import "./Coba.css"; // Gaya CSS

function Coba() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div>
      <header>
        <button onClick={toggleNavbar}>☰ Toggle Navbar</button>
        <nav className={isNavbarVisible ? "navbar" : "navbar hidden"}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Welcome to My Website</h1>
        <p>Content goes here...</p>
      </main>
    </div>
  );
}

export default Coba;
