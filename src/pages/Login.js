import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    // Simulate login and redirect
    const handleLogin = () => {
        navigate('/editor'); // Redirect to the wireframe editor
    };

    return (
        <div className="login">
            <h2>Demo Login</h2>
            <button onClick={handleLogin}>Enter Demo</button>
        </div>
    );
};

export default Login;
