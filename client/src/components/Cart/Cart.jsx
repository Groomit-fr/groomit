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
    console.log(stripePromise);

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
                <div className="center__wrapper">
                    {products.map(item => (
                        <div key={item.id} className="cart__center__item">
                            <img className="cart__center__item__illu" src={import.meta.env.VITE_UPLOAD_URL + item.image} alt={item.name} />
                            <div className="cart__center__item__details">
                                <p className="cart__center__item__details__title">{item.title}</p>
                                <p className="cart__center__item__details__size">Taille : {item.size}</p>
                                <div className="cart__center__item__details__quantity">
                                    <button className="cart__center__item__details__quantity__remove" onClick={item.quantity > 1 ? () => dispach(removeQuantity({ id: item.id, size: item.size })) : () => dispach(removeItem({ id: item.id, size: item.size }))}>-</button>
                                    <p className="cart__center__item__details__quantity__number">{item.quantity}</p>
                                    <button className="cart__center__item__details__quantity__add" onClick={() => dispach(addQuantity({ id: item.id, size: item.size }))}>+</button>
                                </div>
                                <p className="cart__center__item__details__price">{item.price}€</p>
                            </div>
                            <img className="cart__center__item__delete" src='/svg/Cart/bin.svg' onClick={() => dispach(removeItem({ id: item.id, size: item.size }))} />
                        </div>
                    ))}
                </div>


                {(products.length === 0) && <p className='cart__center__emptyCart'> Votre panier est vide </p>}

                {(products.length === 0) &&
                    <div className='cart__center__shop' >
                        <PrimaryButton title="Voir la boutique" link="/products" />
                    </div>}

                {(products.length > 0) &&
                    <div className="cart__center__total">
                        <p>Total :</p>
                        <p>{totalPrice}€</p>
                    </div>}
                {(products.length > 0) &&
                    <div className='cart__center__buttons'>
                        <div className='cart__center__buttons__empty' onClick={() => dispach(resetCart())}>
                            <PrimaryButton title="Vider le panier" type="function" />
                        </div>
                        <div className='cart__center__buttons__pay' onClick={handlePayment}>
                            <PrimaryButton title="Payer" type="function" />
                        </div>
                    </div>
                }




            </div>
        </div>
    )
}

export default Cart;