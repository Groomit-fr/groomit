import React from "react";
import "./Cart.scss";

const Cart = () => {

    const data = [
        {
            id: 1,
            name: "T-shirt Groomit 1",
            image: "/img/tshirt.svg",
            isAvailable: true,
            composition: "100% coton",
            careGuide: "Lavage à 30°",
            price: 20,
        },
    ]

    return (
        <div className="cart">
            <h1>Dans le panier</h1>
            {data.map(item => (
                <div key={item.id} className="cart__item">
                    <img src={item.image} alt={item.name} />
                    <div className="cart__item__details">
                        <p>{item.name}</p>
                        <p>{item.price}€</p>
                    </div>
                    <button>Supprimer l'article</button>
                </div>
            ))}
                <div className="cart__total">
                    <p>Total</p>
                    <p>20€</p>
                </div>
        </div>
    )
}

export default Cart;