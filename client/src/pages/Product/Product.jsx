import React from "react";
import {useState} from "react";
import "./Product.scss";

const Product = () => {

    const [quantity, setQuantity] = useState(0);

    return (
        <div className="product">
            <h1>Le T-Shirt Blanc</h1>
            <div className="product__image">
                <img src="/img/white_tshirt.png" alt="T-Shirt Blanc" />
                <img src="/img/white_tshirt.png" alt="T-Shirt Blanc" />
                <img src="/img/white_tshirt.png" alt="T-Shirt Blanc" />
            </div>

            <div className="product__description">
                <p>Lorem </p>
            </div>

            <button onClick={()=>setQuantity(prev=>prev+1)}>Ajouter au panier</button>
        </div>
    )
}

export default Product;