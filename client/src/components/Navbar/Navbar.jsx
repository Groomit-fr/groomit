import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const products = useSelector(state => state.cart.products);

    const quantity = products.reduce((acc, item) => acc + item.quantity, 0);

    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {       
            console.log(event.target.parentNode.className);
            if(!event.target.parentNode.className.includes("cart") && !event.target.parentNode.className.includes("primary")) {
                setOpen(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <Link to="/">
                            <img src="/img/logo.svg" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="right">
                    <Link to="/products" className="item">PRODUITS</Link>
                    <Link to="/factory" className="item">GROOMIT FACTORY</Link>
                    <Link to="/apropos" className="item">À PROPOS</Link>
                    <div ref={ref} className="item item-cart" onClick={() => setOpen(!open)}>
                        <img src="/img/cart.svg" alt="" />
                        <span className="item-count">{quantity}</span>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}

export default Navbar;