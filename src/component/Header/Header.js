import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <div className='nav-link'>
            <Link to='/home'>Home</Link>
            <Link to='/VolenteerRegister'>VolenteerRegister</Link>
            <Link to='/register'>Register</Link>
            {
                user
                    ?
                    <button style={{ fontSize: '20px' }} className='border-0 bg-white px-3 logOut' onClick={handleSignOut}>Log Out</button>
                    :
                    <Link to='/login'>Login</Link>
            }
        </div>
    );
};

export default Header;