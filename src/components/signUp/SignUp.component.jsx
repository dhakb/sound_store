import { useState } from "react";

import {createAuthUserWithEmailAndPassword, createUserDocFromAuth} from "../../utils/firebase/firebase.utils";

import FormInput from "../FormInput/FromInput.component"
import Button from "../button/Button.component";
import "./SignUp.styles.scss"



const INITIAL_VALUE_FORM_INPUTS = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};



const SignUp = () => {
    const [formFields, setFormFields] = useState(INITIAL_VALUE_FORM_INPUTS);
    const { displayName, email, password, confirmPassword } = formFields;

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Be careful! Little bit relaxation *")
            alert("Passwords don't match!");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            user.displayName = displayName;
            await createUserDocFromAuth(user);
            resetHandler();
        } catch (err) {
            alert(err.code);
            console.log(err);
        }
    };

    const resetHandler = () => {
        setFormFields(INITIAL_VALUE_FORM_INPUTS);
    };

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-form-container">
            <h2>Don't hava an account? No Prob.</h2>
            <span>Sign up with Email and Password</span>
            <form onSubmit={submitHandler}>
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleInputChange}
                    name="displayName"
                    value={displayName}
                />
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleInputChange}
                    name="email"
                    value={email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleInputChange}
                    name="password"
                    value={password}
                />
                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleInputChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUp;
