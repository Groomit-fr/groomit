import React from "react";
import { useState } from "react";
import "./Product.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";


const Product = () => {

    const dispach = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const id = parseInt(useParams().id);

    const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

    // console.log(data);
    // console.log(data?.attributes.image.data.length);


    return (
        <div className="product">
            <h1 className="product__title">{data?.attributes.title}</h1>
            <div className="product__image">
                {data?.attributes.image.data.map((image, index) => {
                    return (
                        <section key={index} className="product__image__wrapper">
                            <img key={index} src={import.meta.env.VITE_UPLOAD_URL + image.attributes.url} alt="T-Shirt Blanc" />
                        </section>
                    )
                })}
            </div>

            <div className="product__selectionBar">

                <section className="product__selectionBar__placeHolder">
                    <img src="/svg/Product/Size/small.svg" alt="small" />
                    <img src="/svg/Product/Size/medium.svg" alt="medium" />
                    <img src="/svg/Product/Size/large.svg" alt="large" />
                    <img src="/svg/Product/Size/extraLarge.svg" alt="extraLarge" />
                </section>

                <section className="product__selectionBar__size">
                    <section className="product__selectionBar__size__item" >
                        <img className="product__selectionBar__size__item__icon" src="/svg/Product/Size/small.svg" alt="small" />
                    </section>
                    <section className="product__selectionBar__size__item" >
                        <img className="product__selectionBar__size__item__icon" src="/svg/Product/Size/medium.svg" alt="small" />
                    </section>
                    <section className="product__selectionBar__size__item" >
                        <img className="product__selectionBar__size__item__icon" src="/svg/Product/Size/large.svg" alt="small" />
                    </section>
                    <section className="product__selectionBar__size__item" >
                        <img className="product__selectionBar__size__item__icon" src="/svg/Product/Size/extraLarge.svg" alt="small" />
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
                            quantity: quantity,
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
                        <li>
                            Fabriqué en France
                        </li>
                        <li>
                            Flocage flex
                        </li>
                        <li>
                            100% chanvre
                        </li>
                        <li>
                            Coupe oversized
                        </li>
                    </ul>
                    <img className="product__description__tshirt__arrows" src="/svg/Product/Description/arrows.svg" alt="" />
                    <section className="product__description__tshirt__illustration">
                        <img className="product__description__tshirt__illustration__pin" src="/svg/Product/Description/pin.svg" alt="" />
                        <img className="product__description__tshirt__illustration__image" src={import.meta.env.VITE_UPLOAD_URL + data?.attributes.image.data[0].attributes.url} alt="T-Shirt Blanc" />
                    </section>
                </section>
                <section className="product__description__text">
                    <p>
                        {data?.attributes.description}
                    </p>
                    <section className="product__description__text__shipping">
                        <img src="/svg/Product/Description/truck.svg" alt="" />
                        <p>Livraison en France : entre le ... et le ...</p>
                    </section>

                </section>
            </section>


        </div>
    )
}

export default Product;