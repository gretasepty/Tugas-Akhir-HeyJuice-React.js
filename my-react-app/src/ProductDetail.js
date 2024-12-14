import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail() {
  const { idProduk } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        // Pastikan idProduk ada dan valid sebelum fetch
        if (!idProduk) {
          setError('ID Produk tidak valid');
          setIsLoading(false);
          return;
        }

        const response = await axios.get(`http://localhost:5000/detail/${idProduk}`);
        
        if (response.data.success) {
          setProductDetail(response.data.data);
        } else {
          setError('Produk tidak ditemukan');
        }
      } catch (error) {
        console.error("Error saat menampilkan detail produk", error);
        setError('Mohon maaf, terjadi kesalahan saat memuat produk');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetail();
  }, [idProduk]);

  if (isLoading) {
    return <div className="container mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="container mt-5">{error}</div>;
  }

  if (!productDetail) {
    return <div className="container mt-5">Produk tidak ditemukan</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {productDetail.Gambar && (
            <img
              src={`http://localhost:5000/${productDetail.Gambar}`}
              alt={productDetail.Produk}
              className="img-fluid"
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </div>
        <div className="col-md-6">
          <h2>{productDetail.Produk}</h2>
          <p>{productDetail.Deskripsi}</p>
          <p>Harga: Rp {productDetail.Harga ? productDetail.Harga.toLocaleString() : "Tidak tersedia"}</p>
          <p>Kategori: {productDetail.Kategori}</p>
          <p>Ukuran: {productDetail.Ukuran}</p>
          <div className="d-flex">
            <button className="btn btn-primary mr-4">Beli sekarang</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;