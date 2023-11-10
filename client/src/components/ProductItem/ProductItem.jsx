import React from 'react'
import { Link } from 'react-router-dom'
import './ProductItem.scss'

function ProductItem(props) {

    const title = props.title;
    const image = props.image;
    const price = props.price;
    const id = props.id;


    return (
        <Link to={`/product/${id}`} className='productItem__link'>
            <div className="productItem">
                <p className='productItem__title'>{title}</p>
                <section className='productItem__illustration'>
                    <img className='productItem__illustration__pin' src="/svg/ProductItem/pin.svg" alt="" />
                    <img className='productItem__illustration__image' src={image} alt={title} />
                </section>
                <p className='productItem__price'>{price}€</p>
            </div>
        </Link>
    )
}

export default ProductItem