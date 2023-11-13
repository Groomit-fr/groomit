import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./List.scss";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const List = ({ categoryId }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { data, loading, error } = useFetch(`/products?populate=*`);
  const [itemsPerRow, setItemsPerRow] = useState(Math.floor(window.innerWidth / convertRemToPixels(20)));
  
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

function convertRemToPixels (rem) {
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
        console.log(itemsPerRow);
        rows.push(row);
    }
    
    return rows;
}

    return null;
  };

  return <div className="list">{renderProducts()}</div>;
};

export default List;
