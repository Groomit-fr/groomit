import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/logo.svg" alt=""/>
                    </div>
                </div>
                <div className="right">
                    <Link to="/" className="item">PRODUITS</Link>
                    <Link to="/products/1" className="item">GROOMIT FACTORY</Link>
                    <Link to="/products/2" className="item">À PROPOS</Link>
                    <div className="item item-cart" onClick={()=>setOpen(!open)}>
                        <img src="/img/cart.svg" alt=""/>
                        <span className="item-count">0</span>
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    )
}

export default Navbar;