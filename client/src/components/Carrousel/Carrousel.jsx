import React, { useState, useEffect } from 'react'
import './Carrousel.scss'
import CardHomepage from '../CardHomepage/CardHomepage'

function Carrousel() {

    const [currentCard, setCurrentCard] = useState(0);


    const carrouselWrapperElement = React.useRef(null);
    const previousElement = React.useRef(null);
    const currentElement = React.useRef(null);
    const nextElement = React.useRef(null);

    const timeScroll = 450;

    console.log(carrouselWrapperElement.current.content)

    useEffect(() => {
        // The DOM element is accessible here.
        currentElement.current.scrollIntoView({
            block: 'nearest',
            inline: 'center'
        });
    }, []);

    function Next() {
        nextElement.current.scrollIntoView({
            behavior: "smooth",
            block: 'nearest',
            inline: 'center'
        });

        setTimeout(() => {
            if (currentCard >= 2) {
                setCurrentCard(0)
            } else {
                setCurrentCard(currentCard + 1);
            }

            currentElement.current.scrollIntoView({
                block: 'nearest',
                inline: 'center'
            });
        }, timeScroll);
    }

    function Prev() {
        previousElement.current.scrollIntoView({
            behavior: "smooth",
            block: 'nearest',
            inline: 'center'
        });

        setTimeout(() => {
            if (currentCard <= 0) {
                setCurrentCard(2)
            } else {
                setCurrentCard(currentCard - 1);
            }

            currentElement.current.scrollIntoView({
                block: 'nearest',
                inline: 'center'
            });
        }, timeScroll);
    }

    const boutiqueGroomit = <CardHomepage title="LA BOUTIQUE GROOMIT" illustration="svg/CardHomePage/designBoutique.svg"
        content={<>Retrouvez les T-shirts et hoodies Groomit. <br /> Ils sont beaux, ils sont doux et ils n’attendent que vous...</>}
        buttonTitle="VOIR LA BOUTIQUE" />;

    const groomitFactory = <CardHomepage title="GROOMIT FACTORY" illustration="svg/CardHomePage/designFactory.svg"
        content={<>Il a pas l’air content Gaétan avec son T-shirt personnalisé ? <br /> Qui vous empêche de faire de même ?</>}
        buttonTitle="PERSONNALISER" />;

    const aPropos = <CardHomepage title="C'est qui GROOMIT ?" illustration="svg/CardHomePage/designApropos.svg"
        content={<>Il vient d’où Groomit ? Il fait quoi Groomit ? <br /> Trouvez les réponses à vos questions...</>}
        buttonTitle="EN SAVOIR PLUS" />;


    //dabord scroll vers le next
    //en mm tps je met à j le dom et je scroll instant ver current


    return (
        <>
            <section className='carrousel'>
                <section className='carrouselContainer'>
                    <section className='carrouselWrapper' ref={carrouselWrapperElement}>
                        <div className='carrouselElement previous3'>
                            {(currentCard === 0 ? boutiqueGroomit : (currentCard === 1 ? groomitFactory : aPropos))}
                        </div>
                        <div className='carrouselElement previous2'>
                            {(currentCard === 0 ? groomitFactory : (currentCard === 1 ? aPropos : boutiqueGroomit))}
                        </div>
                        <div className='carrouselElement previous1' ref={previousElement}>
                            {(currentCard === 0 ? aPropos : (currentCard === 1 ? boutiqueGroomit : groomitFactory))}
                        </div>
                        <div className='carrouselElement current' ref={currentElement}>
                            {(currentCard === 0 ? boutiqueGroomit : (currentCard === 1 ? groomitFactory : aPropos))}
                        </div>
                        <div className='carrouselElement next1' ref={nextElement}>
                            {(currentCard === 0 ? groomitFactory : (currentCard === 1 ? aPropos : boutiqueGroomit))}
                        </div>
                        <div className='carrouselElement next2'>
                            {(currentCard === 0 ? aPropos : (currentCard === 1 ? boutiqueGroomit : groomitFactory))}
                        </div>
                        <div className='carrouselElement next3'>
                            {(currentCard === 0 ? boutiqueGroomit : (currentCard === 1 ? groomitFactory : aPropos))}
                        </div>
                    </section>
                </section>


                <section className='buttons'>
                    <button onClick={() => Prev()}>Prev</button>
                    <button onClick={() => Next()}>Next</button>
                </section>
                <h1>{currentCard}</h1>
            </section>

        </>
    )
}

export default Carrousel