import React, {useState, useEffect} from "react";
import axios from "axios";

function Katalog(){
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const response = await axios.get("http://localhost:5000/product");
                setProduct(response.data);
            } catch (error){
                console.error("Error saat menampilkan produk", error);
            }
        };

        fetchProduct();
    }, []);

    return(
        <div>
            <h2>Katalog Produk</h2>
            <ul>
                {product.map((product) => (
                    <div key={product.idProduct}>
                        <h3>{product.namaProduk}</h3>
                        <p>{product.harga}</p>
                        {product.gambar && (
                            <img
                                src={`http://localhost:5000/${product.gambar}`}
                                alt={product.namaProduk}
                                style={{width: "200px", height: "200px"}}
                            />
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Katalog;