import React, { useState, useEffect } from 'react'
import './Carrousel.scss'
import CardHomepage from '../CardHomepage/CardHomepage'

function Carrousel() {


    const carrouselWrapperElement = React.useRef(null); //useRef to access the DOM element
    const [isScrolling, setIsScrolling] = useState(false); //state to prevent user from scrolling too fast
    const [carrouselState, setCarrouselState] = useState(0); //state to know which element is currently displayed

    useEffect(() => {
        // The DOM element is accessible here.
    }, []);

    function Next() {
        //scroll vers next1
        if(carrouselState < 2) {
            setCarrouselState(carrouselState + 1)
        } else{
            setCarrouselState(0)
        }

        setIsScrolling(true); //prevent user from scrolling too fast

        const carrouselListLength = carrouselWrapperElement.current.children.length //get the number of children of the carrouselWrapperElement
        for (let i = carrouselListLength - 1; i >= 0; i--) { //loop through the children of the carrouselWrapperElement
            //add 1
            if (i === 8) { //if the element is the last one
                console.log("last one")
                carrouselWrapperElement.current.children[i].classList.remove("next4") //remove the class next3
                carrouselWrapperElement.current.children[i].classList.add("next3") //add the class next2
            } else if (i === 7) { //if the element is the last one
                carrouselWrapperElement.current.children[i].classList.remove("next3") //remove the class next3
                carrouselWrapperElement.current.children[i].classList.add("next2") //add the class next2
            } else if (i === 6) { //if the element is the 6th one
                carrouselWrapperElement.current.children[i].classList.remove("next2") //remove the class next2
                carrouselWrapperElement.current.children[i].classList.add("next1") //add the class next1
            } else if (i === 5) { //if the element is the 5th one
                carrouselWrapperElement.current.children[i].classList.remove("next1") //remove the class next1
                carrouselWrapperElement.current.children[i].classList.add("current") //add the class current
            } else if (i === 4) { //if the element is the 4th one
                carrouselWrapperElement.current.children[i].classList.remove("current") //remove the class current
                carrouselWrapperElement.current.children[i].classList.add("previous1") //add the class previous1
            } else if (i === 3) { //if the element is the 3rd one
                carrouselWrapperElement.current.children[i].classList.remove("previous1") //remove the class previous1
                carrouselWrapperElement.current.children[i].classList.add("previous2") //add the class previous2

            } else if (i === 2) { //if the element is the 2nd one
                carrouselWrapperElement.current.children[i].classList.remove("previous2") //remove the class previous2
                carrouselWrapperElement.current.children[i].classList.add("previous3") //add the class previous3
            } else if (i === 1) { //if the element is the 2nd one
                carrouselWrapperElement.current.children[i].classList.remove("previous3") //remove the class previous2
                carrouselWrapperElement.current.children[i].classList.add("previous4") //add the class previous3
            }
            else if (i === 0) { //if the element is the 1st one

                //remove the element
                carrouselWrapperElement.current.children[i].classList.add("transition")
                carrouselWrapperElement.current.children[i].classList.add("deleted")  //add the class deleted
                carrouselWrapperElement.current.children[i].addEventListener("transitionend", () => (setIsScrolling(false))(carrouselWrapperElement.current.children[i].remove())); //when the transition is over, remove the element

                //add the element at the end
                carrouselWrapperElement.current.appendChild(carrouselWrapperElement.current.children[3].cloneNode(true)) //add a clone of the 2nd element at the end
                carrouselWrapperElement.current.children[9].classList.remove("previous2") //remove the class previous3
                carrouselWrapperElement.current.children[9].classList.add("next4") //add the class next3
                carrouselWrapperElement.current.children[9].classList.add("deleted") //add the class deleted
                carrouselWrapperElement.current.children[9].classList.add("transition") //add the class transition

                setTimeout(() => {
                    carrouselWrapperElement.current.children[9].classList.remove("deleted") //remove the class deleted
                    carrouselWrapperElement.current.children[9].classList.remove("transition") //remove the class transition
                }, 0);
            }
        }
    }

    function Prev() {
        //scroll vers previous1

        if(carrouselState > 0) {
            setCarrouselState(carrouselState - 1)
        } else{
            setCarrouselState(2)
        }

        setIsScrolling(true);

        const carrouselListLength = carrouselWrapperElement.current.children.length
        for (let i = 0; i < carrouselListLength; i++) {
            if (i === 0) {
                carrouselWrapperElement.current.children[i].classList.remove("previous4")
                carrouselWrapperElement.current.children[i].classList.add("previous3")
            } else if (i === 1) {
                carrouselWrapperElement.current.children[i].classList.remove("previous3")
                carrouselWrapperElement.current.children[i].classList.add("previous2")
            } else if (i === 2) {
                carrouselWrapperElement.current.children[i].classList.remove("previous2")
                carrouselWrapperElement.current.children[i].classList.add("previous1")
            } else if (i === 3) {
                carrouselWrapperElement.current.children[i].classList.remove("previous1")
                carrouselWrapperElement.current.children[i].classList.add("current")

            } else if (i === 4) {
                carrouselWrapperElement.current.children[i].classList.remove("current")
                carrouselWrapperElement.current.children[i].classList.add("next1")

            } else if (i === 5) {
                carrouselWrapperElement.current.children[i].classList.remove("next1")
                carrouselWrapperElement.current.children[i].classList.add("next2")

            } else if (i === 6) {
                carrouselWrapperElement.current.children[i].classList.remove("next2")
                carrouselWrapperElement.current.children[i].classList.add("next3")
            } else if (i === 7) {
                carrouselWrapperElement.current.children[i].classList.remove("next3")
                carrouselWrapperElement.current.children[i].classList.add("next4")
            }
            else if (i === 8) {

                carrouselWrapperElement.current.children[i].classList.add("transition")
                carrouselWrapperElement.current.children[i].classList.add("deleted")
                carrouselWrapperElement.current.children[i].addEventListener("transitionend", () => ((setIsScrolling(false))(carrouselWrapperElement.current.children[i + 1].remove())));

                carrouselWrapperElement.current.insertBefore(carrouselWrapperElement.current.children[5].cloneNode(true), carrouselWrapperElement.current.firstChild)
                carrouselWrapperElement.current.children[0].classList.remove("next2")
                carrouselWrapperElement.current.children[0].classList.add("previous4")
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
        buttonTitle="VOIR LA BOUTIQUE" buttonLink="/products/1" />;

    const groomitFactory = <CardHomepage title="GROOMIT FACTORY" illustration="svg/CardHomePage/designFactory.svg"
        content={<>Il a pas l’air content Gaétan avec son T-shirt personnalisé ? <br /> Qui vous empêche de faire de même ?</>}
        buttonTitle="PERSONNALISER" buttonLink="/products/1" />;

    const aPropos = <CardHomepage title="C'est qui GROOMIT ?" illustration="svg/CardHomePage/designApropos.svg"
        content={<>Il vient d’où Groomit ? Il fait quoi Groomit ? <br /> Trouvez les réponses à vos questions...</>}
        buttonTitle="EN SAVOIR PLUS" buttonLink="/products/1" />;


    //dabord scroll vers le next
    //en mm tps je met à j le dom et je scroll instant ver current


    return (
        <>
            <section className='carrousel'>
                <section className='carrouselPole'>
                    <img src="/svg/Carrousel/pole.svg" alt="" />
                </section>
                <section className='carrouselContainer'>
                    <section className='carrouselWrapper' ref={carrouselWrapperElement}>
                        <div className='carrouselElement previous4'>
                            <img className="hanger" src="/svg/Carrousel/hanger.svg" />
                            {aPropos}
                        </div>
                        <div className='carrouselElement previous3'>
                            <img className="hanger" src="/svg/Carrousel/hanger.svg" />
                            {boutiqueGroomit}
                        </div>
                        <div className='carrouselElement previous2'>
                            <img className="hanger" src="/svg/Carrousel/hanger.svg" />
                            {groomitFactory}
                        </div>
                        <div className='carrouselElement previous1'>
                            <img className="hanger" src="/svg/Carrousel/hanger.svg" />
                            {aPropos}
                        </div>
                        <div className='carrouselElement current'>
                            <img className="hanger" src="/svg/Carrousel/hanger.svg" />
                            {boutiqueGroomit}
                        </div>
                        <div className='carrouselElement next1'>
                            <img className="hanger" src="/svg/Carrousel/hanger.svg" />
                            {groomitFactory}
                        </div>
                        <div className='carrouselElement next2'>
                            <img className="hanger" src="/svg/Carrousel/hanger.svg" />
                            {aPropos}
                        </div>
                        <div className='carrouselElement next3'>
                            <img className="hanger" src="/svg/Carrousel/hanger.svg" />
                            {boutiqueGroomit}
                        </div>
                        <div className='carrouselElement next4'>
                            <img className="hanger" src="/svg/Carrousel/hanger.svg" />
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