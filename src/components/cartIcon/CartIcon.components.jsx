import {useContext, useEffect} from "react";
import {CartContext} from "../../context/cart/Cart.context";

import {ReactComponent as CartIconSvg} from "../../assets/cart-icon.svg";

import "./CartIcon.styles.scss"

const CartIcon = ({onLoseFocus}) => {
    const {cartItemsQty, toggleCartDropDown, getCartItemsQty, cartProducts} = useContext(CartContext)

    useEffect(() => {
        getCartItemsQty()
    }, [cartProducts])

    return (
        <div className="cart-icon-container" onClick={() => toggleCartDropDown()}>
            <CartIconSvg className="shopping-icon" />
            <span className="item-count">{cartItemsQty}</span>
        </div>
    );
};

export default CartIcon;