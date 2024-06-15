// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Please fill in all fields');
            setIsLoggedIn(false);
        } else {
            setError('');
            setIsLoggedIn(true);
            onLogin(username);
        }
    };

    return (
        <div className="login-container">
            {!isLoggedIn && (
                <div className="login-form">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    {error && <p className="error">{error}</p>}
                </div>
            )}
            {isLoggedIn && <h1>Welcome John Doe</h1>}
        </div>
    );
};

export default Login;
