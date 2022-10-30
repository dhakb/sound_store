

import "./UserDetailsDropdown.styles.scss"

const UserDetailDropdown = ({currentUser}) => {
    return (
        <div className="user-details-container" tabIndex="1">
            <span>Username: {currentUser?.displayName}</span>
            <span>Email: {currentUser?.email}</span>
        </div>
    );
};

export default UserDetailDropdown;