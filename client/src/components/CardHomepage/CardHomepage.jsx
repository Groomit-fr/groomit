import React from 'react'
import './CardHomepage.scss'
import Button from '../Button/Button';

function CardHomepage(props) {

    const title = (props.title != null ? props.title : "Titre");
    const illustration = (props.illustration != null ? props.illustration : "Illustration");
    const content = (props.content != null ? props.content : "Content");
    const buttonTitle = (props.buttonTitle != null ? props.buttonTitle : "Button");

    return (

        <section className='cardHomepage'>
            <img src="/svg/CardHomePage/cardHomepageLeft.svg"></img>
            <section className='cardWrapper'>
                <img className="top" src="/svg/CardHomePage/cardHomepageTop.svg"></img>
                <section className='cardContent'>
                    <h2 className='title'>{title}</h2>
                    <img src={illustration}/>
                    <h4 className='textContent'>{content}</h4>
                    <Button title={buttonTitle}/>
                </section>
                <img  className="bottom" src="/svg/CardHomePage/cardHomepageBottom.svg"></img>
            </section>
            <img src="/svg/CardHomePage/cardHomepageRight.svg"></img>
        </section>


    )
}

export default CardHomepage