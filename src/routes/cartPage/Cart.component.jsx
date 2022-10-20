import {useContext, useEffect} from "react";

import {CartContext} from "../../context/Cart.context";

import CartItem from "../../components/cartItem/CartItem.component"

import "./Cart.styles.scss"

const Cart = () => {
    const {cartProducts, totalPrice, getTotalPrice} = useContext(CartContext);

    useEffect(() => {
        getTotalPrice()
    }, [cartProducts])

    return (
        <div className="cart-container">
            <div className="cart-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartProducts.map((cartItem) => (
                    <CartItem cartItem={cartItem} key={cartItem.id}/>
                ))
            }
            <span className="total">Total: {totalPrice}</span>
        </div>
    );
};

export default Cart;