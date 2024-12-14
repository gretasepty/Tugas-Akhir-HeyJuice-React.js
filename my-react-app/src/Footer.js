import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"; 

function Footer() {
  return (
    <footer className="footer bg-dark text-white mt-auto p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-start">
            <h5>Kontak Kami</h5>
            <ul className="list-unstyled">
              <li>Email: care@heyjuice.com</li>
              <li>Telepon: +62 812 3456 7890</li>
              <li>Alamat: Jalan Raya No.123, Surabaya</li>
            </ul>
          </div>

          <div className="col-md-6 text-start">
            <h5>Tentang Kami</h5>
            <p>
              Toko Online terbaik untuk kebutuhan harian Anda. 
              Kami menyediakan berbagai produk berkualitas dengan harga terjangkau.
            </p>
          </div>
        </div>

        <hr className="bg-light" />
        <p className="mb-0 text-start">
          &copy; {new Date().getFullYear()} Heyjuice. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
