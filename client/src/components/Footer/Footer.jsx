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
                            <Link to="/" className="homepage">
                                Accueil
                            </Link>
                            <Link to="/factory">
                                Groomit factory
                            </Link>
                            <Link to="/products">
                                Produits groomit
                            </Link>
                            <Link to="/apropos">
                                À propos
                            </Link>

                        </div>
                        <div className="link_items_right">
                            <Link to="/legalNotice">
                                Mentions légales
                            </Link>
                            <Link to="/CGV">
                                CGV
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="bottom_items">
                    <div>
                        <a href="groomit.factory@example.fr">groomit.factory@gmail.com</a>
                        <p>06.26.66.30.73</p>
                    </div>
                    <p>268 Route de Laval
                        <br /> 12270 - St André de Najac</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;