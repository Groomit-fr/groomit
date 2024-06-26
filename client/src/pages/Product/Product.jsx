import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Product.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Error from "../../components/Error/Error";
import Helmet from "react-helmet";


const Product = () => {

    const dispach = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("M");


    const id = parseInt(useParams().id);

    const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

    const sizeS = useRef(null);
    const sizeM = useRef(null);
    const sizeL = useRef(null);
    const sizeXL = useRef(null);

    useEffect(() => {

        if (data) {

            if (size === "S") {
                sizeS.current.classList.add("active");
                sizeM.current.classList.remove("active");
                sizeL.current.classList.remove("active");
                sizeXL.current.classList.remove("active");
            } else if (size === "M") {
                sizeS.current.classList.remove("active");
                sizeM.current.classList.add("active");
                sizeL.current.classList.remove("active");
                sizeXL.current.classList.remove("active");
            } else if (size === "L") {
                sizeS.current.classList.remove("active");
                sizeM.current.classList.remove("active");
                sizeL.current.classList.add("active");
                sizeXL.current.classList.remove("active");
            } else if (size === "XL") {
                sizeS.current.classList.remove("active");
                sizeM.current.classList.remove("active");
                sizeL.current.classList.remove("active");
                sizeXL.current.classList.add("active");
            }
        }

    }, [size]);


    //get today date, and add 7 days to it
    //get today date and add 10 days to it
    const today = new Date();
    const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    const nextTenDays = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 13);

    if (!data) return (
        <Error title="Oops, il semblerait que cette page n'existe pas..." content="Si cette erreur persite, veuillez contacter Groomit." button="Retourner à la page d'accueil" link="/" />
    );
    return (
        <div className="product">
            <Helmet>
                <title>{data?.attributes.title} - Groomit</title>
                <meta name="description" content="Voilà un produit Groomit, vous en trouverez pas deux des comme ça..." />
                <meta name="robots" content="noindex"/>
            </Helmet>

            <h1 className="product__title">{data?.attributes.title}</h1>
            <Swiper spaceBetween={0} centerInsufficientSlides={true} navigation={true}

                breakpoints={{
                    // when window width is >= 480px
                    375: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 640px
                    864: {
                        slidesPerView: 3,
                    },
                    1250: {
                        slidesPerView: 4
                    }
                }}

                pagination={{
                    clickable: true,
                    type: "progressbar"
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data?.attributes.image.data.map((image, index) => {
                    return (
                        <SwiperSlide key={index} >
                            <section key={index} className="product__image__wrapper">
                                <img key={index} src={import.meta.env.VITE_UPLOAD_URL + image.attributes.url} alt="T-Shirt Blanc" />
                            </section>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
            <div className="product__selectionBar">

                <section className="product__selectionBar__size">
                    <section ref={sizeS} className="product__selectionBar__size__item" onClick={() => setSize("S")}>
                        <p>S</p>
                    </section>
                    <section ref={sizeM} className="product__selectionBar__size__item active" onClick={() => setSize("M")} >
                        <p>M</p>
                    </section>
                    <section ref={sizeL} className="product__selectionBar__size__item" onClick={() => setSize("L")}>
                        <p>L</p>
                    </section>
                    <section ref={sizeXL} className="product__selectionBar__size__item" onClick={() => setSize("XL")}>
                        <p>XL</p>
                    </section>
                </section>

                <section className="product__selectionBar__right">
                    <h2 className='product__selectionBar__right__price'>{data?.attributes.price}€</h2>
                    <section className='product__selectionBar__right__button' onClick={() => {
                        dispach(addToCart({
                            id: data?.id,
                            title: data?.attributes.title,
                            price: data?.attributes.price,
                            image: data?.attributes.image.data[0].attributes.url,
                            category: data?.attributes.category.data.attributes.title,
                            quantity: quantity,
                            size: size
                        }));
                        setQuantity(prev => prev);
                    }}>
                        <PrimaryButton title="Ajouter au panier" link={""} />
                    </section>
                </section>
            </div>

            <section className="product__description">
                <img className="product__description__rope" src="/svg/Product/Description/rope.svg" alt="" />

                <section className="product__description__tshirt">
                    <ul className="product__description__tshirt__infos">
                        {data?.attributes.line1 ? <li> {data?.attributes.line1} </li> : null}
                        {data?.attributes.line2 ? <li> {data?.attributes.line2} </li> : null}
                        {data?.attributes.line3 ? <li> {data?.attributes.line3} </li> : null}
                        {data?.attributes.line4 ? <li> {data?.attributes.line4} </li> : null}
                    </ul>
                    <img className="product__description__tshirt__arrows" src="/svg/Product/Description/arrows.svg" alt="" />
                    <section className="product__description__tshirt__illustration">
                        <img className="product__description__tshirt__illustration__pin" src="/svg/Product/Description/pin.png" alt="" />
                        <img className="product__description__tshirt__illustration__image" src={import.meta.env.VITE_UPLOAD_URL + data?.attributes.image.data[0].attributes.url} alt="T-Shirt Blanc" />
                    </section>
                </section>
                <section className="product__description__text">
                    <p>
                        {data?.attributes.description}
                    </p>
                    <section className="product__description__text__shipping">
                        <img src="/svg/Product/Description/truck.svg" alt="" />
                        <p>Livraison en France : entre le {nextWeek.getDate() + " " + nextWeek.toLocaleString('fr-FR', { month: 'long' })} et le {nextTenDays.getDate() + " " + nextTenDays.toLocaleString('fr-FR', { month: 'long' })}</p>
                    </section>

                </section>
            </section>

        </div>
    )

}

export default Product;