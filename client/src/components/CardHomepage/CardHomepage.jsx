import React from 'react'
import './CardHomepage.scss'
import PrimaryButton from '../PrimaryButton/PrimaryButton';

function CardHomepage(props) {

    const title = (props.title != null ? props.title : "Titre");
    const illustration = (props.illustration != null ? props.illustration : "Illustration");
    const content = (props.content != null ? props.content : "Content");
    const buttonTitle = (props.buttonTitle != null ? props.buttonTitle : "Button");
    const buttonLink = (props.buttonLink != null ? props.buttonLink : "Link");

    return (

        <section className='cardHomepage'>

            <section className='cardContent'>
                <h2 className='title'>{title}</h2>
                <img className='cardContentImg' draggable="false" src={illustration} />
                <h4 className='textContent'>{content}</h4>
                <section className='cardButton'>
                    <PrimaryButton title={buttonTitle} link={buttonLink} />
                </section>
            </section>

        </section>


    )
}

export default CardHomepage