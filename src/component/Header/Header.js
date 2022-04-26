import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-link'>
            <Link to='/home'>Home</Link>
            <Link to='/VolenteerRegister'>VolenteerRegister</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
    );
};

export default Header;