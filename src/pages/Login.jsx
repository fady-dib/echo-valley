import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {login} from '../features/login/actions';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.login);

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleClick = () => {
        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email.");
            return;
        }

        dispatch(login({ email, password }))
            .unwrap()
            .then(() => {
                navigate("/main");
            })
            .catch((err) => {
                console.error("Login failed:", err);
            });
    };

    return (
        <div>
            <div className="login-container">
                <div className="login">
                    <div className="login-header">
                        <p>Login</p>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    {loading && <div className="loading">Loading...</div>}
                    {error && <div className="error">{error.message}</div>}
                    <button onClick={handleClick} disabled={loading}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
