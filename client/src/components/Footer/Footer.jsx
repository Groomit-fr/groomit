import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="top_items">
                    <Link to="/">
                        <img src="/img/logo.svg" alt="" />
                    </Link>
                    <div className="link_items">
                        <div className="link_items_left">
                            <Link to="/" className="link">
                                Accueil
                            </Link>
                            <Link to="/factory" className="link">
                                Groomit factory
                            </Link>
                            <Link to="/products" className="link">
                                Produits groomit
                            </Link>
                            <Link to="/apropos" className="link">
                                À propos
                            </Link>
                        </div>
                        <div className="link_items_right">
                            <Link to="/legalNotice" className="link">
                                Mentions légales
                            </Link>
                            <Link to="/CGV" className="link">
                                CGV
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="bottom_items">
                    <div>
                        <a href="groomit.factory@example.fr">groomit.factory@gmail.com</a>
                        <p>..............</p>
                    </div>
                    <p>
                        ................
                        <br /> ...................................
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Footer;