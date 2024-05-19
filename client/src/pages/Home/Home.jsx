import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import { resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useEffect } from "react";

const Home = () => {
    
    useEffect(() => {
        document.title = "Groomit";
    }, []);

    return (
        <div>
            <Carrousel/>
        </div>
    )
}

export default Home;