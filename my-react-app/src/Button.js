import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Button() {
  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Urutkan berdasarkan
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <a className="dropdown-item" href="#">
            Harga tertinggi ke terendah
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Harga terendah ke tertinggi
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Button;
