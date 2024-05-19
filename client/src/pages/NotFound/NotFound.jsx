import React from 'react'
import './NotFound.scss'
import Error from '../../components/Error/Error'
import { Helmet } from 'react-helmet'

function NotFound() {

    return (
        <>
        <Error title="Oops, il semblerait que cette page n'existe pas..." content="Si cette erreur persite, veuillez contacter Groomit." button="Retourner à la page d'accueil" link="/" />
        <Helmet>
            <title>Page non trouvée - Groomit</title>
            <meta name="description" content="Erreur 404, page introuvable" />
        </Helmet>
        </>
    )
}

export default NotFound