import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import {CartContext} from "../../context/cart/Cart.context";

import CartDropdownItem from "../cartDropDownItem/CartDropdownItem.component";
import Button from "../button/Button.component";

import "./CartDropDown.styles.scss"

const CartDropDown = () => {
    const {cartProducts} = useContext(CartContext)
    const navigate = useNavigate()

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartProducts.map((product) => (
                    <CartDropdownItem product={product} key={product.id}/>
                ))}
            </div>
            <Button onClick={() => navigate("/cart")}>View Cart</Button>
        </div>
    )
}

export default CartDropDown