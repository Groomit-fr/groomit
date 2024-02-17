import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import { removeItem, resetCart, addQuantity, removeQuantity } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

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
            
            console.log(res.data.stripeSession.id);
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id             ,
            });
        }
        catch (error) {
            console.log(error);
        }
    };



    return (
        <div className="cart">
            <h1>Dans le panier</h1>
            {products.map(item => (
                <div key={item.id} className="cart__item">
                    <img src={import.meta.env.VITE_UPLOAD_URL + item.image} alt={item.name} />
                    <div className="cart__item__details">
                        <p>{item.title} x {item.quantity}</p>
                        <p>{item.size}</p>
                        <button onClick={() => dispach(addQuantity({ id: item.id }))}>+</button>
                        <button onClick={item.quantity > 1 ? () => dispach(removeQuantity({ id: item.id })) : () => dispach(removeItem(item.id))}>-</button>
                        <p>{item.price}€</p>
                    </div>
                    <button onClick={() => dispach(removeItem({ id: item.id, size: item.size }))}>Supprimer l'article</button>
                </div>
            ))}
            <div className="cart__total">
                <p>Total</p>
                <p>{totalPrice}€</p>
            </div>
            <button onClick={() => dispach(resetCart())}>Vider le panier</button>
            <button onClick={handlePayment}>Payer</button>
        </div>
    )
}

export default Cart;