import React, {useState} from "react";
import axios from "axios";

function Search(){
    return(
        <div className="container">
            <div className="my-3">
                <input
                type="text"
                className="form-control"
                placeholder="Cari produk"
                />
                <button className="btn btn-primary mt-2">
                    Cari
                </button>
            </div>

        </div>
    )

}

export default Search;
