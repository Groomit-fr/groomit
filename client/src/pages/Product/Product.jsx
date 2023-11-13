import React from "react";
import { useState } from "react";
import "./Product.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";


const Product = () => {

    const dispach = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const id = parseInt(useParams().id);

    const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

    // console.log(data);
    // console.log(data?.attributes.image.data.length);

    
    return (
        <div className="product">
            <h1>{data?.attributes.title}</h1>
            <div className="product__image">
                <img src={import.meta.env.VITE_UPLOAD_URL + data?.attributes.image.data[0].attributes.url} alt="T-Shirt Blanc" />
            </div>

            <div className="product__description">
                <h2>{data?.attributes.price}€</h2>
                <p>{data?.attributes.description}</p>
            </div>

            <button onClick={() => {
                dispach(addToCart({
                    id: data?.id,
                    title: data?.attributes.title,
                    price: data?.attributes.price,
                    image: data?.attributes.image.data[0].attributes.url,
                    quantity: quantity,
                }));
                setQuantity(prev => prev);
            }}>Ajouter au panier</button>
        </div>
    )
}

export default Product;