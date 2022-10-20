import {Fragment, useContext} from "react";
import {Link, Outlet} from "react-router-dom";

import {CartContext} from "../../context/Cart.context";

import CartIcon from "../../components/cartIcon/CartIcon.components";
import CartDropDown from "../../components/cartDropDown/CartDropDown.component";
import {ReactComponent as LogoSvg} from "../../assets/BigFoot.svg";

import "./NavigationBar.styles.scss"


const Navigation = () => {
    const {isCartOpened} = useContext(CartContext)


    return (
        <Fragment>
            <div className="navigation-container">
                <Link className="logo-container" to="/">
                    <LogoSvg/>
                </Link>
                <div className="nav-links-container">

                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>

                    <Link className="nav-link" to="/auth">
                        SIGN IN
                    </Link>
                    <CartIcon/>
                </div>
                {isCartOpened && <CartDropDown/>}
            </div>
            <Outlet/>
        </Fragment>
    )
}


export default Navigation