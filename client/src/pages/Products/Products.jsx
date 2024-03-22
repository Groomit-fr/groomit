import React from "react";
import "./Products.scss";
import List from "../../components/List/List.jsx";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

const Products = () => {


    const { data, loading, error } = useFetch(`/categories?populate=*`);

    const [clickedCategory, setClickedCategory] = useState("All");


    const All = useRef(null);
    const Tshirt = useRef(null);
    const Hoodies = useRef(null);

    useEffect(() => {
        All.current.classList.add("active");
        if(data){
            if (clickedCategory === "All") {
                All.current.classList.add("active");
                Hoodies.current.classList.remove("active");
                Tshirt.current.classList.remove("active");
            } else if (clickedCategory === "T-shirts") {
                Tshirt.current.classList.add("active");
                All.current.classList.remove("active");
                Hoodies.current.classList.remove("active");
            } else if (clickedCategory === "Hoodies") {
                Hoodies.current.classList.add("active");
                Tshirt.current.classList.remove("active");
                All.current.classList.remove("active");
            }
        }
        
    }, [clickedCategory]);
    

   

    const renderCategories = () => {


        if (data) {

            return data.map((category, index) => {
                let ref;
                if (category.attributes.title === "T-shirts") {
                   ref = Tshirt;
                } else if (category.attributes.title === "Hoodies") {
                    ref = Hoodies;
                }

                return (
                    <div ref={ref} className="products__banner__filter__item" key={index} onClick={() => setClickedCategory(category.attributes.title)}>
                        <img src={category.attributes.image.data.attributes.url} alt="Dessin t-shirt" />
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
                    <div ref={All} className="products__banner__filter__item"  onClick={() => setClickedCategory("All")}>
                        <img src="/img/show_all.svg" />
                        <p>Afficher tout</p>
                    </div>

                    {renderCategories()}

                </div>

            </div>
            <div className="products__item__row">
                <List categoryTitle={clickedCategory} />
            </div>

        </div>
    )
}

export default Products;