import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Social/Social';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate();
    let location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/home')
    }
    let from = location.state?.from?.pathname || "/";
    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPass(e.target.value);
    }



    if (user) {
        navigate(from, { replace: true });
    }


    const submitform = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, pass)
    }

    return (
        <div>
            <h2 className='mt-4' style={{ color: 'purple' }}> Please Login</h2>
            <form onSubmit={submitform} className='register mt-4'>
                <input onBlur={handleEmailBlur} className='mb-3' type="email" name="email" id="" placeholder='Enter your Email' required />
                <input onBlur={handlePasswordBlur} className='mb-3' type="password" name="password" id="" placeholder='Password' required />
                <Button variant="primary  mx-auto d-block mb-4 mt-3" type="submit">
                    login
                </Button>
                <p className='mt-2'>New to Our website? <Link to='/register'>Register</Link></p>
            </form>
            <Social></Social>
        </div>
    );
};

export default Login;