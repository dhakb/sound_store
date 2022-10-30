import {Fragment, useContext, useState} from "react";
import useSound from "use-sound";
import {Link, Outlet} from "react-router-dom";

import {signOutUser} from "../../utils/firebase/firebase.utils";
import {CartContext} from "../../context/cart/Cart.context";
import {UserContext} from "../../context/user/User.Context";

import SoundWave from "../animations/SoundWave.component";
import CartIcon from "../../components/cartIcon/CartIcon.components";
import CartDropDown from "../../components/cartDropDown/CartDropDown.component";
import UserAvatar from "../userAvatar/UserAvatar.component";
import UserDetailDropdown from "../userDetailsDropdown/UserDetailsDropdown.component";
import {ReactComponent as SoundLogo} from "../../assets/1536281106.svg";
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import sound from "../../assets/Sergi Boal - After the Rain.mp3"
import "./NavigationBar.styles.scss"


const Navigation = () => {
    const [showUserDropdown, setUserDropdown] = useState(false)
    const [isSoundOn, setIsSoundOn] = useState(true)
    const {currentUser} = useContext(UserContext)
    const {isCartOpened, toggleCartDropDown} = useContext(CartContext)

    const [play, {pause}] = useSound(sound)

    return (
        <Fragment>
            <div className="navigation-container">
                <div className="logo-container">
                    <Link to="/">
                        <SoundLogo className={`logo ${!isSoundOn && "rotation"}`}/>
                    </Link>
                    <div onClick={() => setIsSoundOn(!isSoundOn)} className="sound-button">
                        {
                            isSoundOn ? <div onClick={() => play()}>
                                <PlayArrowIcon className="icon"/>
                            </div> : <div onClick={() => pause()}>
                                <PauseIcon className="icon"/>
                            </div>
                        }
                    </div>
                </div>
                {
                    !isSoundOn && <SoundWave/>
                }
                {
                    !isSoundOn && <SoundWave/>
                }
                {
                    !isSoundOn && <SoundWave/>
                }
                {
                    !isSoundOn && <SoundWave/>
                }
                {
                    !isSoundOn && <SoundWave/>
                }
                {
                    !isSoundOn && <SoundWave/>
                }

                <div className="nav-links-container">

                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>
                             SIGN OUT
                            </span>
                        ) : (
                            <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                        )}
                    {
                        currentUser && <UserAvatar onAvatarClick={() => setUserDropdown(!showUserDropdown)}
                                                   onLostFocus={() => setUserDropdown(false)}/>
                    }
                    <CartIcon className="cart-icon" onLoseFocus={() => toggleCartDropDown()}/>
                </div>
                {isCartOpened && <CartDropDown/>}
                {showUserDropdown && <UserDetailDropdown currentUser={currentUser}/>}
            </div>
            <Outlet/>
        </Fragment>
    )
}


export default Navigation