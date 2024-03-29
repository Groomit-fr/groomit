import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";
import { useSelector } from "react-redux";




const CancelOrder = () => {

    const dispach = useDispatch();

    const products = useSelector(state => state.cart.products);

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
                sessionId: res.data.stripeSession.id             ,
            });
        }
        catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            
            <p>Commande annulée</p>

            <button onClick={handlePayment}>Ressayer</button>
            
        </div>
    )
}

export default CancelOrder;