import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";

const Cart = () => {

    const dispach = useDispatch();

    const products = useSelector(state => state.cart.products);

    const totalPrice = products.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    console.log(products[0]?.quantity)

    return (
        <div className="cart">
            <h1>Dans le panier</h1>
            {products.map(item => (
                <div key={item.id} className="cart__item">
                    <img src={import.meta.env.VITE_UPLOAD_URL + item.image} alt={item.name} />
                    <div className="cart__item__details">
                        <p>{item.title} x {item.quantity}</p>
                        {/* <button onClick={()=>dispach(addQuantity(item.id))} >+</button> */}
                        <button>-</button>
                        <p>{item.price}€</p>
                    </div>
                    <button onClick={()=>dispach(removeItem(item.id))}>Supprimer l'article</button>
                </div>
            ))}
                <div className="cart__total">
                    <p>Total</p>
                    <p>{totalPrice}€</p>
                </div>
            <button onClick={()=>dispach(resetCart())}>Vider le panier</button>
        </div>
    )
}

export default Cart;