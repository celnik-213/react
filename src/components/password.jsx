import { useState, useEffect,} from "react";

const Password = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    return(
        <div>
            <input type={isPasswordVisible ? "text" : "password"} placeholder="Enter your password" />
            <button onClick={() => setPasswordVisible(!isPasswordVisible)}>
                {isPasswordVisible ? "Hide Password" : "Show Password"}
            </button>
        </div>
    );
}
export default Password;