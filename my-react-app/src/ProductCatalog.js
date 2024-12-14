import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function ProductCatalog() {
  const [product, setProduct] = useState([]); // Semua produk
  const [sortedProduct, setSortedProduct] = useState([]); // Produk yang difilter
  const [sortOrder, setSortOrder] = useState("none");
  const [selectedCategory, setSelectedCategory] = useState(null); // Kategori yang dipilih
  const [searchQuery, setSearchQuery] = useState(""); // Kata kunci pencarian

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response;
        if (selectedCategory === null) {
          response = await axios.get("http://localhost:5000/product");
          setProduct(response.data);
          setSortedProduct(response.data);
        } else {
          response = await axios.get(`http://localhost:5000/category/${selectedCategory}`);
          setProduct(response.data.data);
          setSortedProduct(response.data.data);
        }
      } catch (error) {
        console.error("Error saat mengambil data produk:", error);
        setProduct([]);
        setSortedProduct([]);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleSort = (order) => {
    setSortOrder(order);
    let sorted = [...product];
    if (order === "asc") {
      sorted.sort((a, b) => a.harga - b.harga);
    } else if (order === "desc") {
      sorted.sort((a, b) => b.harga - a.harga);
    }
    setSortedProduct(sorted);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === "") {
      setSortedProduct(product);
    } else {
      const filtered = product.filter((item) =>
        item.namaProduk.toLowerCase().includes(query.toLowerCase())
      );
      setSortedProduct(filtered);
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Cari produk..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
  
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <button
            className={`btn btn-outline-dark mx-2 ${selectedCategory === null ? 'active' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            Semua
          </button>
          <button
            className={`btn btn-outline-dark mx-2 ${selectedCategory === 1 ? 'active' : ''}`}
            onClick={() => setSelectedCategory(1)}
          >
            Buah
          </button>
          <button
            className={`btn btn-outline-dark mx-2 ${selectedCategory === 2 ? 'active' : ''}`}
            onClick={() => setSelectedCategory(2)}
          >
            Sayur
          </button>
          <button
            className={`btn btn-outline-dark mx-2 ${selectedCategory === 3 ? 'active' : ''}`}
            onClick={() => setSelectedCategory(3)}
          >
            Mix
          </button>
        </div>
  
        <div>
          <label htmlFor="sorting" className="me-2">Urutkan Harga:</label>
          <select
            id="sorting"
            className="form-select d-inline w-auto"
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="none">Pilih</option>
            <option value="asc">Termurah</option>
            <option value="desc">Termahal</option>
          </select>
        </div>
      </div>
  
      <div className="row">
        {Array.isArray(sortedProduct) && sortedProduct.length > 0 ? (
          sortedProduct.map((product) => (
            <div className="col-6 col-md-3 mb-4" key={product.idProduk}>
              <div className="card h-100">
                {product.gambar && (
                  <img
                    src={`http://localhost:5000/${product.gambar}`}
                    className="card-img-top"
                    alt={product.namaProduk}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{product.namaProduk}</h5>
                  <p className="card-text">Rp {product.harga.toLocaleString()}</p>
                  <Link to={`/detail/${product.idProduk}`} className="btn btn-success w-100">
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">Tidak ada produk yang tersedia</div>
        )}
      </div>
    </div>
  );
  
}

export default ProductCatalog;
