import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const products = useSelector(state => state.cart.products);

    const quantity = products.reduce((acc, item) => acc + item.quantity, 0);

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
                    <Link to="/products" className="item">GROOMIT FACTORY</Link>
                    <Link to="/products" className="item">À PROPOS</Link>
                    <div className="item item-cart" onClick={()=>setOpen(!open)}>
                        <img src="/img/cart.svg" alt=""/>
                        <span className="item-count">{quantity}</span>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}

export default Navbar;