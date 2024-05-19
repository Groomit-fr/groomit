import React from "react";
import { useDispatch } from "react-redux";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Error from "../../components/Error/Error";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";
import { useSelector } from "react-redux";
import './CancelOrder.scss';
import { Helmet } from "react-helmet";




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
                    title: item.title,
                    quantity: item.quantity,
                    size: item.size,
                    image: [import.meta.env.VITE_UPLOAD_URL + item.image],
                    category: item.category
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
        <div className="cancelOrder">
            <Helmet>
                <title>Commande annulée - Groomit</title>
                <meta name="description" content="Votre commande a été annulée" />
            </Helmet>
            <Error title="Votre commande a été annulée." content="Êtes vous sûr de vouloir annuler votre commande ?" />
            <div onClick={handlePayment} className="retry">
                <PrimaryButton title="Réessayer" type="function" />
            </div>
            <div className="back">
                <PrimaryButton title="Retourner à la boutique" link="/products" />
            </div>
        </div>

    )
}

export default CancelOrder;