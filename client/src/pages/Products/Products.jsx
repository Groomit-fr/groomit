import React from "react";
import "./Products.scss";
import List from "../../components/List/List.jsx";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {

    const [categoryTitle, setCategoryTitle] = useState("All");

    const { data, loading, error } = useFetch(`/categories?populate=*`);

    const renderCategories = () => {
        if (loading) {
            return <div></div>;
        }

        if (error) {
            return <div>Oops il y a une erreur</div>;
        }

        if (data) {
            return data.map((category, index) => {
                return (
                    <div className="products__banner__filter__item" key={index} onClick={() => setCategoryTitle(category.attributes.title)}>
                        <img src={import.meta.env.VITE_UPLOAD_URL + category.attributes.image.data.attributes.url} alt="Dessin t-shirt" />
                        <p>{category.attributes.title}</p>
                    </div>
                )
            })
        }

        return null;
    }

    return (
        <div className="products">
            <div className="products__banner">
                <h1>Les produits Groomit</h1>
                <h2>Pour toi + moi + tous ceux qui en veulent</h2>
                <div className="products__banner__filter">
                    <div className="products__banner__filter__item"  onClick={() => setCategoryTitle("All")}>
                        <img src="/img/show_all.svg" />
                        <p>Afficher tout</p>
                    </div>

                    {renderCategories()}

                </div>

            </div>
            <div className="products__item__row">
                <List categoryTitle={categoryTitle} />
            </div>

        </div>
    )
}

export default Products;