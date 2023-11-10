import React, { useEffect, useRef } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./List.scss";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const List = ({categoryId}) => {
    const [windowWidth, setWindowWidth] = React.useState(0);

const { data, loading, error } = useFetch(`/products?populate=*[filters][categories][id]=${categoryId}`);

    useEffect(() => {
        function handleWindowResize() {
            setWindowWidth(getWindowWidth);
        }

        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    let productItemWidth = convertRemToPixels(32);
    const domElement = [];

    while (data.length > 0) {
        const items = [];

        for (let i = data.length; i >= 0; i--) {
            if (data[i] != null) {
                if ((items.length * productItemWidth) > (windowWidth)) {
                    break;
                } else {
                    const item = <ProductItem key={data.length} title={data[i].name} image={data[i].image} price={data[i].price} id={data[i].id}/>;
                    items.push(item);
                    data.splice(i, 1);
                }
            }
        }

        const flexItem = <div className="list__flexItem" key={data.length}>
            <img className="list__flexItem__rope" src="/svg/List/rope.svg" alt="" />
            {items.map((item) => {
                return item;
            })}
        </div>;

        domElement.push(flexItem);
    }



    const [data, setData] = useState([]);


    return (
        <div className="list" >
            {domElement}
        </div>
    )
}

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function getWindowWidth() {
    return window.innerWidth
}

export default List;
