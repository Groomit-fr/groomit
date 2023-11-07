import React from "react";
import "./Products.scss";
import List from "../../components/List/List.jsx";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";    

const Products = () => {

    const categoryId = parseInt(useParams().id);

    const { data, loading, error } = useFetch(`/products?populate=*`);

    console.log(data);


    return (
        <div className="products">
            <div className="products__banner">
                <h1>Les produits Groomit</h1>
                <h2>Pour toi + moi + tous ceux qui en veulent</h2>
                <div className="products__banner__filter">
                    <div className="products__banner__filter__item">
                        <img src="/img/show_all.svg" />
                        <p>Afficher tout</p>
                    </div>
                    <div className="products__banner__filter__item">
                        <img src="/img/tshirt.svg" alt="Dessin t-shirt" />
                        <p>Les t-shirts</p>
                    </div>
                    <div className="products__banner__filter__item">
                        <img src="/img/hoodie.svg" alt="Dessin hoodie" />
                        <p>Les hoodies</p>
                    </div>
                </div>
                <div className="products__item__row">
                    {data && data.map(item => (
                        <div key={item.id} className="products__item">
                            <p>{item.attributes.title}</p>
                            
                            <img src={import.meta.env.VITE_UPLOAD_URL + item.attributes.image.data[0].attributes.url} alt={item.attributes.title} />
                            <p>{item.attributes.price}€</p>
                        </div>
                    ))}
                </div>
            </div>

            </div>
            <div className="products__item__row">
                <List />
            </div>
        </div>
    )
}

export default Products;