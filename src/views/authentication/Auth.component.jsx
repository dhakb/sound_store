import SignIn from "../../components/signIn/SignIn.component";
import SignUp from "../../components/signUp/SignUp.component";

import "./Auth.styles.scss"

const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignIn />
            <hr/>
            <SignUp />
        </div>
    );
};

export default Authentication;