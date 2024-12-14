import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar fixed-top d-flex justify-content-between align-items-center">
        {/* Menu Navigasi */}
        <ul className="menu d-flex list-unstyled mb-0">
          <li className="menu-item mx-3">Beranda</li>
          <li className="menu-item mx-3">
            <a href="/">Produk</a>
          </li>
          <li className="menu-item mx-3">Pesanan</li>
          <li className="menu-item mx-3">Profil</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
