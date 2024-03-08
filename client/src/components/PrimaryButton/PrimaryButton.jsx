import React from 'react'
import { Link } from 'react-router-dom'
import './PrimaryButton.scss'

function PrimaryButton(props) {

    const title = props.title;
    const link = props.link;
    const type = props.type;

    if (type === 'submit') return (
        <section className='primaryButton'>
            <section className='buttonInsideWrapper'>
                <button type='submit'>
                    {title}{props.children}
                </button>
            </section>
        </section>
    )
    if (type === 'function') return (
        <section className='primaryButton'>
            <section className='buttonInsideWrapper'>
                <button>
                    {title}{props.children}
                </button>
            </section>
        </section>
    )

    return (
        <Link to={link}>
            <section className='primaryButton'>
                <section className='buttonInsideWrapper'>
                    <button>
                        {title}{props.children}
                    </button>
                </section>
            </section>
        </Link>
    )
}

export default PrimaryButton