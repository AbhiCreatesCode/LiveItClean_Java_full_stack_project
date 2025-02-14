// import React from "react";
import './LoginForm.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" name="username" placeholder="Username" required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" name="password" placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>

                <div className="remeber-forgot">
                    <label>
                        <input type="checkbox" />Remeber me
                    </label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don&apos;t have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
