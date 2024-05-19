import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import { Helmet } from "react-helmet";


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Groomit</title>
            </Helmet>
            <Carrousel/>
        </div>
    )
}

export default Home;