import React from 'react'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import './Error.scss'

function Error(props) {


    return (
        <div className='error'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            {(props.button  && props.link ? <PrimaryButton title={props.button} link={props.link} /> : null)}
        </div>
    )
}

export default Error