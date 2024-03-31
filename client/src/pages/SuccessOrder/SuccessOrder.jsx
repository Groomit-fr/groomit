import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Error from "../../components/Error/Error";


const SuccessOrder = () => {

    const dispach = useDispatch();

    dispach(resetCart())

    return (
        <Error title="Votre commande a bien été enregistrée !" content="Vous recevrez un email de confirmation dans quelques instants." button="Retourner à la page d'accueil" link="/" />
    )
}

export default SuccessOrder;