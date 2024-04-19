import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import { resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const Home = () => {
    
    return (
        <div>
            <Carrousel/>
        </div>
    )
}

export default Home;