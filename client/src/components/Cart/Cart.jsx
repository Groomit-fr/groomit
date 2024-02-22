import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import { removeItem, resetCart, addQuantity, removeQuantity } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Cart = () => {

    const dispach = useDispatch();

    const products = useSelector(state => state.cart.products);

    const totalPrice = products.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    const stripePromise = loadStripe("pk_test_51OC0WbDKjeptmAsJhwQoIjyrHCkGyojtJCptfifphvDKxRUESqQB1KutMu3DgCCtxs38MeaRnCK2apt3Jon5kI9O00D538zjbH");

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post('/orders', {
                cart: products.map(item => ({
                    id: item.id,
                    quantity: item.quantity,
                    size: item.size,
                }))
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        }
        catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="cart">
            <div className="cart__center">
                <h1>Dans le panier</h1>
                {products.map(item => (
                    <div key={item.id} className="cart__center__item">
                        <img src={import.meta.env.VITE_UPLOAD_URL + item.image} alt={item.name} />
                        <div className="cart__center__item__details">
                            <p>{item.title} x {item.quantity}</p>
                            <p>{item.size}</p>
                            <button onClick={() => dispach(addQuantity({ id: item.id }))}>+</button>
                            <button onClick={item.quantity > 1 ? () => dispach(removeQuantity({ id: item.id })) : () => dispach(removeItem(item.id))}>-</button>
                            <p>{item.price}€</p>
                        </div>
                        <button onClick={() => dispach(removeItem({ id: item.id, size: item.size }))}>Supprimer l'article</button>
                    </div>
                ))}

                {(products.length === 0) && <p>Votre panier est vide</p>}

                {(products.length > 0) &&
                    <div className="cart__center__total">
                        <p>Total</p>
                        <p>{totalPrice}€</p>
                    </div>}
                {(products.length > 0) &&
                    <div onClick={() => dispach(resetCart())}>
                        <PrimaryButton title="Vider le panier" type="function" />
                    </div>}
                {(products.length > 0) &&
                    <div onClick={handlePayment}>
                        <PrimaryButton title="Payer" type="function" />
                    </div>}

            </div>
        </div>
    )
}

export default Cart;