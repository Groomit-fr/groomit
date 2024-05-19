import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/Error/Error";
import { makeRequest } from "../../makeRequest";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";


const SuccessOrder = () => {

    const queryParameters = new URLSearchParams(window.location.search)
    const sessionId = queryParameters.get("session_id")

    const dispach = useDispatch();


    const { data, loading, error } = useFetch(`/orders?filters[stripeId]=${sessionId}&populate=*`);
    const products = useSelector(state => state.cart.products);

    const getPosts = async () => {
        try {
            const res = await makeRequest.post('/orders', {
                type: 'order',
                sess: sessionId,
                cart: products.map(item => ({
                    id: item.id,
                    title: item.title,
                    quantity: item.quantity,
                    size: item.size,
                    image: [import.meta.env.VITE_UPLOAD_URL + item.image],
                    category: item.category
                })),
            });
            // console.log(res);
            dispach(resetCart())

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();

        let pushed = false;

        if (data?.length > 0) {
            // console.log("Order already created")
        } else if (data?.length === 0) {
            // console.log("Order not created")
            if (!pushed) {
                getPosts();
                pushed = true;
            }
        }
    }, [data])


    return (
        <>
            <Error title="Votre commande a bien été enregistrée !" content="Vous recevrez un email de confirmation dans quelques instants." button="Retourner à la page d'accueil" link="/" />
            <Helmet>
                <title>Commande validée - Groomit</title>
                <meta name="description" content="Votre commande a bien été enregistrée" />
            </Helmet>
        </>
    )
}

export default SuccessOrder;