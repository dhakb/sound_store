import "./CartDropdownItem.styles.scss"

const CartDropdownItem = ({product}) => {
    return (
        <div className="dropdown-item-container">
            <img src={product.imageUrl} alt={product.name}/>
            <div className="item-details">
                <span>{product.qty} x {product.price}</span>
                <span className="name">{product.name}</span>
            </div>
        </div>
    )
}


export default CartDropdownItem