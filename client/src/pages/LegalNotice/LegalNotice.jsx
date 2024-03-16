import React from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
import { useParams } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";


const LegalNotice = () => {

    const dispach = useDispatch();

    dispach(resetCart())

    return (
        <div>
            
            <h1>Mentions Légales</h1>

        </div>
    )
}

export default LegalNotice;