import React from 'react'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import './NotFound.scss'
import Error from '../../components/Error/Error'

function NotFound() {
    return (
        <Error title="Oops, il semblerait que cette page n'existe pas..." content="Si cette erreur persite, veuillez contacter Groomit." button="Retourner à la page d'accueil" link="/" />
    )
}

export default NotFound