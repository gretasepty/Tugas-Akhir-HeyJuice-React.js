import React, {useState} from "react";
import axios from "axios";

function FormKatalog(){
    const[idCategory, setIdCategory] = useState("");
    const[namaProduk, setNamaProduk] = useState("");
    const[harga, setHarga] = useState("");
    const[stock, setStock] = useState("");
    const[size, setSize] = useState("");
    const[deskripsi, setDeskripsi] = useState("");
    const[gambar, setGambar] = useState("null");
    const[message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("idCategory", idCategory);
        formData.append("namaProduk", namaProduk);
        formData.append("harga", harga);
        formData.append("stock", stock);
        formData.append("size", size);
        formData.append("deskripsi", deskripsi);
        formData.append("gambar", gambar);

        try{
            const response = await axios.post("http://localhost:5000/add-product", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setMessage(response.data.message);
            setIdCategory("");
            setNamaProduk("");
            setHarga("");
            setStock("");
            setSize("");
            setDeskripsi("");
            setGambar(null);
        }catch (error) {
            console.error("Error saat proses", error);
            setMessage("Erros menambahkan data")
        }
    };

    return(
        <div>
            <h2>MAsukkan Data Produk</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID CATEGORY </label>
                    <input
                        type="text"
                        value={idCategory}
                        onChange={(e) => setIdCategory(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>PRODUK </label>
                    <input
                        type="text"
                        value={namaProduk}
                        onChange={(e) => setNamaProduk(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>HARGA </label>
                    <input
                        type="text"
                        value={harga}
                        onChange={(e) => setHarga(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>STOK </label>
                    <input
                        type="text"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>SIZE </label>
                    <input
                        type="text"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>DESKRIPSI </label>
                    <input
                        type="text"
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Gambar </label>
                    <input
                        type="file"                        
                        onChange={(e) => setGambar(e.target.files[0])}
                        required
                    />
                </div>
                <button type="submit">Tambahkan Produk</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default FormKatalog;