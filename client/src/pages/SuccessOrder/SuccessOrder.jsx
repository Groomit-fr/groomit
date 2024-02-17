import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";


const SuccessOrder = () => {

    const dispach = useDispatch();

    dispach(resetCart())

    return (
        <div>
            
            <p>Commande validée</p>

            <PrimaryButton link={`/`} title="Retour à l'accueil" />
        </div>
    )
}

export default SuccessOrder;