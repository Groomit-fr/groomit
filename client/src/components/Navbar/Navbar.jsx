import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {

    const [openCart, setOpenCart] = useState(false);
    const [openMenu, setOpenMenu] = useState(false)

    const products = useSelector(state => state.cart.products);

    const quantity = products.reduce((acc, item) => acc + item.quantity, 0);

    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.parentNode.className.includes("cart") && !event.target.parentNode.className.includes("button")) {
                setOpenCart(false);
            }
            if (event.target.parentNode.className.includes("open")) {
                setTimeout(() => {
                setOpenMenu(false);
                }, 250);
            } else if (!event.target.parentNode.className.includes("menu")) {
                setOpenMenu(false);
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

                    <div ref={ref} className="item item-cart" onClick={() => setOpenCart(!openCart)}>
                        <img src="/img/cart.svg" alt="" />
                        <span className="item-count">{quantity}</span>
                    </div>
                    <section className="menuButton" onClick={() => setOpenMenu(!openMenu)}>
                        <img src="/svg/Navbar/indicator.svg" alt="" />
                        <img src="/svg/Navbar/indicator.svg" alt="" />
                        <img src="/svg/Navbar/indicator.svg" alt="" />
                    </section>
                </div>
            </div>
            <div className="downbar">
                <p>Groomit nous a quitté le 22 décembre 2024.
                    <br />
                    En sa mémoire, son site reste ouvert.

                </p>
            </div>
            {openCart && <Cart />}
            <section className={(openMenu ? "menu open" : "menu")}>
                <section className="filler"></section>
                <Link to="/products" className="item">PRODUITS</Link>
                <Link to="/factory" className="item">GROOMIT FACTORY</Link>
                <Link to="/apropos" className="item">À PROPOS</Link>
            </section>
        </div>
    )
}

export default Navbar;