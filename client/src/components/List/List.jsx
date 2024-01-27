import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./List.scss";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { makeRequest } from "../../makeRequest";

const List = ({ categoryTitle }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { data, loading, error } = useFetch((categoryTitle != "All") ? `/products?filters[category][title][$eq]=${categoryTitle}&populate=*` : `/products?populate=*`);
    const [itemsPerRow, setItemsPerRow] = useState(Math.floor(window.innerWidth / convertRemToPixels(20)));

    const addProduct = () => {
        makeRequest.post('/products', 
        {
            "data": {
                "type": "orders",
                "attributes": {
                    "email": "hello",           
                    
                }  

            }
        }
        ).then(res => {
            console.log(res);
        });
    }
    
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
            setItemsPerRow(Math.floor(window.innerWidth / convertRemToPixels(20)))
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function convertRemToPixels(rem) {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    };

    const renderProducts = () => {
        if (loading) {
            return <div></div>;
        }

        if (error) {
            return <div>Oops il y a une erreur</div>;
        }

        if (data) {
            const productItems = data.map((product, index) => (
                <ProductItem
                    key={product.id}
                    title={product.attributes.title}
                    image={import.meta.env.VITE_UPLOAD_URL + product.attributes.image.data[0].attributes.url}
                    price={product.attributes.price}
                    id={product.id}
                />
            ));

            const rows = [];
            for (let i = 0; i < productItems.length; i += itemsPerRow) {
                const rowItems = productItems.slice(i, i + itemsPerRow);
                const row = (
                    <div className="list__flexItem" key={i}>
                        <img className="list__flexItem__rope" src="/svg/List/rope.svg" alt="" />
                        {rowItems}
                    </div>
                );
                rows.push(row);
            }

            return rows;
        }

        return null;
    };

    return <div className="list">{renderProducts()}
    <button className="list__button" onClick={addProduct}>Ajouter un produit</button>
    </div>;
};

export default List;
