import React from 'react'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import './NotFound.scss'

function NotFound() {
    return (
        <div className='notfound'>
            <h1>Oops ! Cette page n'éxiste pas</h1>
            <p>Vous vous êtes perdu ?</p>
            <PrimaryButton title="Revenir à l'accueil" link='/' />
        </div>
    )
}

export default NotFound