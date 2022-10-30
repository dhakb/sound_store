import {useContext, useEffect, useState} from "react";
import avatarImg from "../../assets/avatar.png"
import {UserContext} from "../../context/user/User.Context";

import "./UserAvatar.styles.scss"

const UserAvatar = ({onAvatarClick, onLostFocus}) => {
    const {currentUser} = useContext(UserContext)


    return (
        <div className="avatar-container" onClick={() => onAvatarClick()} tabIndex="1" onBlur={() => onLostFocus()}>
            <img src={currentUser.photoURL ? currentUser.photoURL : avatarImg}  className="avatar-img" alt="user avatar picture"/>
        </div>
    );
};

export default UserAvatar;