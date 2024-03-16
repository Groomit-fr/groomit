import React from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
import { useParams } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";


const CGV = () => {

    const dispach = useDispatch();

    dispach(resetCart())

    return (
        <div>
            
            <h1>Conditions générales de vente</h1>

        </div>
    )
}

export default CGV;