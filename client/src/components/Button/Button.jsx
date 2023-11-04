import React from 'react'
import './Button.scss'

function Button(props) {

    const title = props.title;

    return (
        <button className='button'>
            {title}
        </button>
    )
}

export default Button