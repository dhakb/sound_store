import {useContext} from "react";

import {CartContext} from "../../context/Cart.context"

import Button from "../button/Button.component";

import "./ProductCard.styles.scss"
const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartContext)

    const {imageUrl, name, price} = product
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} className="responsive"/>
            <Button buttonType="inverted" onClick={() => addItemToCart(product)}> Add to cart</Button>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default ProductCard