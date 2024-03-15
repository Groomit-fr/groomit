import React, { useState, useEffect } from 'react'
import './Carrousel.scss'
import CardHomepage from '../CardHomepage/CardHomepage'

function Carrousel() {

    const carrouselWrapperElement = React.useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [carrouselState, setCarrouselState] = useState(0);

    let mousedown = false;

    let as = false;

    useEffect(() => {
        document.getElementById('carrousel').addEventListener('mousedown', (e) => {
            mousedown = true;
        })
        document.getElementById('carrousel').addEventListener('mouseup', (e) => {
            mousedown = false;
        })


        document.getElementById('carrousel').addEventListener('touchmove', (e) => {
            mousedown = true;
            if (!as) {
                touchStart(e);
            }
        })
        document.getElementById('carrousel').addEventListener('touchend', (e) => {
            mousedown = false;
        })



        document.getElementById('carrousel').addEventListener('mousemove', (e) => {
            if (!as) {
                touchStart(e);
            }
        })
    })


    let pos;
    let mov;

    function touchStart(e) {

        if (mousedown) {

            if (!e.clientX) {
                mov = e.touches[0].clientX - pos;
            } else {
                mov = (e.clientX) - pos;
            }


            if (mov > 0) {
                console.log('prev')
                if (!isScrolling) {
                    setIsScrolling(true);
                    Prev();
                    as = true;
                }
            } else if (mov < 0) {
                console.log('Next')
                if (!isScrolling) {
                    setIsScrolling(true);
                    Next();
                    as = true;
                }
            }

            if (!e.clientX) {
                pos = e.touches[0].clientX;
            } else {
                pos = e.clientX;
            }

        }
    }

    function updateClasses(index, removeClass, addClass) {
        carrouselWrapperElement.current.children[index].classList.remove(removeClass)
        carrouselWrapperElement.current.children[index].classList.add(addClass)
    }

    function setIsScrollingFalse() {
        setIsScrolling(false)
    }




    function Next() {
        as = true;


        if (carrouselState < 2) {
            setCarrouselState(carrouselState + 1)
        } else {
            setCarrouselState(0)
        }

        setIsScrolling(true);

        const carrouselListLength = carrouselWrapperElement.current.children.length
        for (let i = carrouselListLength - 1; i >= 0; i--) {


            if (i === 8) {
                updateClasses(i, "next4", "next3")
            } else if (i === 7) {
                updateClasses(i, "next3", "next2")
            } else if (i === 6) {
                updateClasses(i, "next2", "next1")
            } else if (i === 5) {
                updateClasses(i, "next1", "current")
            } else if (i === 4) {
                updateClasses(i, "current", "previous1")
            } else if (i === 3) {
                updateClasses(i, "previous1", "previous2")
            } else if (i === 2) {
                updateClasses(i, "previous2", "previous3")
            } else if (i === 1) {
                updateClasses(i, "previous3", "previous4")
            }
            else if (i === 0) {

                carrouselWrapperElement.current.children[i].classList.add("transition")
                carrouselWrapperElement.current.children[i].classList.add("deleted")
                carrouselWrapperElement.current.children[i].addEventListener("transitionend", () => (setIsScrollingFalse)(carrouselWrapperElement.current.children[i].remove()));
                carrouselWrapperElement.current.appendChild(carrouselWrapperElement.current.children[3].cloneNode(true))
                updateClasses(9, "previous2", "next4")
                carrouselWrapperElement.current.children[9].classList.add("deleted")
                carrouselWrapperElement.current.children[9].classList.add("transition")

                setTimeout(() => {
                    carrouselWrapperElement.current.children[9].classList.remove("deleted")
                    carrouselWrapperElement.current.children[9].classList.remove("transition")
                }, 0);
            }
        }
    }

    function Prev() {
        as = true;

        if (carrouselState > 0) {
            setCarrouselState(carrouselState - 1)
        } else {
            setCarrouselState(2)
        }

        setIsScrolling(true);

        const carrouselListLength = carrouselWrapperElement.current.children.length
        for (let i = 0; i < carrouselListLength; i++) {
            if (i === 0) {
                updateClasses(i, "previous4", "previous3")
            } else if (i === 1) {
                updateClasses(i, "previous3", "previous2")
            } else if (i === 2) {
                updateClasses(i, "previous2", "previous1")
            } else if (i === 3) {
                updateClasses(i, "previous1", "current")
            } else if (i === 4) {
                updateClasses(i, "current", "next1")
            } else if (i === 5) {
                updateClasses(i, "next1", "next2")
            } else if (i === 6) {
                updateClasses(i, "next2", "next3")
            } else if (i === 7) {
                updateClasses(i, "next3", "next4")
            }
            else if (i === 8) {

                carrouselWrapperElement.current.children[i].classList.add("transition")
                carrouselWrapperElement.current.children[i].classList.add("deleted")
                carrouselWrapperElement.current.children[i].addEventListener("transitionend", () => ((setIsScrollingFalse)(carrouselWrapperElement.current.children[i + 1].remove())));
                carrouselWrapperElement.current.insertBefore(carrouselWrapperElement.current.children[5].cloneNode(true), carrouselWrapperElement.current.firstChild)
                updateClasses(0, "next2", "next4")
                carrouselWrapperElement.current.children[0].classList.add("deleted")
                carrouselWrapperElement.current.children[0].classList.add("transition")

                setTimeout(() => {
                    carrouselWrapperElement.current.children[0].classList.remove("deleted")
                    carrouselWrapperElement.current.children[0].classList.remove("transition")
                }, 0);
            }
        }
    }


    const boutiqueGroomit = <CardHomepage title="LA BOUTIQUE GROOMIT" illustration="svg/CardHomePage/designBoutique.svg"
        content={<>Retrouvez les T-shirts et hoodies Groomit. <br /> Ils sont beaux, ils sont doux et ils n’attendent que vous...</>}
        buttonTitle="VOIR LA BOUTIQUE" buttonLink="/products" />;

    const groomitFactory = <CardHomepage title="GROOMIT FACTORY" illustration="svg/CardHomePage/designFactory.svg"
        content={<>Il a pas l’air content Gaétan avec son T-shirt personnalisé ? <br /> Qui vous empêche de faire de même ?</>}
        buttonTitle="PERSONNALISER" buttonLink="/factory" />;

    const aPropos = <CardHomepage title="C'est qui GROOMIT ?" illustration="svg/CardHomePage/designApropos.svg"
        content={<>Il vient d’où Groomit ? Il fait quoi Groomit ? <br /> Trouvez les réponses à vos questions...</>}
        buttonTitle="EN SAVOIR PLUS" buttonLink="/apropos" />;

    return (
        <>
            <section className='carrousel' id='carrousel'>
                <section className='carrouselPole'>
                    <img src="/svg/Carrousel/pole.svg" draggable="false" alt="" />
                </section>
                <section className='carrouselContainer'>
                    <section className='carrouselWrapper' ref={carrouselWrapperElement}>
                        <div className='carrouselElement previous4'>
                            <img className="hanger" draggable="false" src="/svg/Carrousel/hanger.svg" />
                            {aPropos}
                        </div>
                        <div className='carrouselElement previous3'>
                            <img className="hanger" draggable="false" src="/svg/Carrousel/hanger.svg" />
                            {boutiqueGroomit}
                        </div>
                        <div className='carrouselElement previous2'>
                            <img className="hanger" draggable="false" src="/svg/Carrousel/hanger.svg" />
                            {groomitFactory}
                        </div>
                        <div className='carrouselElement previous1'>
                            <img className="hanger" draggable="false" src="/svg/Carrousel/hanger.svg" />
                            {aPropos}
                        </div>
                        <div className='carrouselElement current'>
                            <img className="hanger" draggable="false" src="/svg/Carrousel/hanger.svg" />
                            {boutiqueGroomit}
                        </div>
                        <div className='carrouselElement next1'>
                            <img className="hanger" draggable="false" src="/svg/Carrousel/hanger.svg" />
                            {groomitFactory}
                        </div>
                        <div className='carrouselElement next2'>
                            <img className="hanger" draggable="false" src="/svg/Carrousel/hanger.svg" />
                            {aPropos}
                        </div>
                        <div className='carrouselElement next3'>
                            <img className="hanger" draggable="false" src="/svg/Carrousel/hanger.svg" />
                            {boutiqueGroomit}
                        </div>
                        <div className='carrouselElement next4'>
                            <img className="hanger" draggable="false" src="/svg/Carrousel/hanger.svg" />
                            {groomitFactory}
                        </div>
                    </section>
                </section>

                <section className='indicators'>
                    <img className={carrouselState === 2 ? "left focused" : "left"} src="/svg/Carrousel/indicator.svg" alt="" />
                    <img className={carrouselState === 0 ? "middle focused" : "middle"} src="/svg/Carrousel/indicator.svg" alt="" />
                    <img className={carrouselState === 1 ? "right focused" : "right"} src="/svg/Carrousel/indicator.svg" alt="" />
                </section>

                <section className='buttons'>
                    <section onClick={() => (!isScrolling ? Prev() : null)}>
                        <img src="/svg/Carrousel/arrowButton.svg" alt="" />
                    </section>
                    <section onClick={() => (!isScrolling ? Next() : null)}>
                        <img src="/svg/Carrousel/arrowButton.svg" alt="" />
                    </section>
                </section>
            </section>

        </>
    )
}

export default Carrousel