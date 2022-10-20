import {useContext} from "react";

import {CartContext} from "../../context/Cart.context";

import "./CartItem.styles.scss"

const CartItem = ({cartItem}) => {
    const {addItemToCart, removeItemFromCart, destroyItemFromCart} = useContext(CartContext);
    const {name, qty, imageUrl, price} = cartItem;

    const addItemHandler = () => {
        addItemToCart(cartItem);
    };

    const removeItemHandler = () => {
        removeItemFromCart(cartItem);
    };

    const destroyItemHandler = () => {
        destroyItemFromCart(cartItem)
    };

    return (
        <div className="cart-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <span className="arrow" onClick={removeItemHandler}> &#10094; </span>
                <span className="value">{qty}</span>
                <span className="arrow" onClick={addItemHandler}> &#10095; </span>
            </div>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={destroyItemHandler}> &#10005; </div>
        </div>
    );
};

export default CartItem;