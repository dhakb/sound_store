import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {signInAuthUserWithEmailAndPassword, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";

import Button from "../button/Button.component";
import FormInput from "../FormInput/FromInput.component"

import "./SingIn.styles.scss";


const INITIAL_VALUE_FORM_INPUTS = {
    email: "",
    password: "",
};


const SignIn = () => {
    const [formFields, setFormFields] = useState(INITIAL_VALUE_FORM_INPUTS);
    const {email, password} = formFields;

    const navigate = useNavigate()


    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        navigate("/")
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const user = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            resetFormFields();
            navigate("/")
        } catch (err) {

            switch (err.code) {
                case "authentication/user-not-found":
                    alert("User Not Found! Try another or create new account!");
                    break;
                case "authentication/wrong-password":
                    alert("Incorrect Password!");
                    break;
                default:
                    alert(err.code);
            }

            console.log(err);
        }
    };


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    };

    const resetFormFields = () => {
        setFormFields(INITIAL_VALUE_FORM_INPUTS);
    };


    return (
        <div className="sign-in-form-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={submitHandler}>
                <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    value={email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    value={password}
                />
                <div className="buttons-container">
                    <Button type="submit" buttonType="inverted">
                        Sign in
                    </Button>
                    <Button onClick={signInWithGoogle} type="button" buttonType="google">
                        Sign in with Google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
