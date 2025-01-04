import React from 'react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const { user } = useAuth();

    return (
        <header>
            <h1>Wireframe Tool</h1>
            <p>Welcome, {user.email}</p>
        </header>
    );
};

export default Header;
