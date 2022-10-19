import {Fragment} from "react";
import {Link, Outlet} from "react-router-dom";

// import {ReactComponent as LogoSvg} from "../../assets/1299625661.svg";
import {ReactComponent as CartIcon} from "../../assets/cart-icon.svg";
import {ReactComponent as LogoSvg} from "../../assets/BigFoot.svg";
import "./NavigationBar.styles.scss"


const Navigation = () => {
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
            </div>
            <Outlet/>
        </Fragment>
    )
}


export default Navigation