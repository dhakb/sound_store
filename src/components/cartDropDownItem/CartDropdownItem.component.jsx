import "./CartItem.styles.scss"

const CartItem = ({product}) => {
    console.log(product)
    return (
        <div className="cart-item-container">
            <img src={product.imageUrl} alt={product.name}/>
            <div className="item-details">
                <span>{product.qty} x {product.price}</span>
                <span className="name">{product.name}</span>
            </div>
        </div>
    )
}


export default CartItem