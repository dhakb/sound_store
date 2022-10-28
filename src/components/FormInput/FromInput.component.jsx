import "./FromInput.styles.scss"

const FormInput = ({ label, ...rest }) => {
    return (
        <div className="group">
            <input {...rest} className="form-input" />
            {label && (
                <label
                    className={`${rest.value.length ? "shrink" : ""} form-input-label`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;
