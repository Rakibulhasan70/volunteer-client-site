import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Social/Social';
import './Register.css'

const Register = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [ConfrimPass, setConfrimPass] = useState('')
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    if (user) {
        navigate('/home')
    }

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPass(e.target.value);
    }
    const handleConfirmPassBlur = e => {
        setConfrimPass(e.target.value);
    }

    const submitform = e => {
        e.preventDefault()
        if (pass !== ConfrimPass) {
            alert('error')
        }
        else {

            createUserWithEmailAndPassword(email, pass)
        }
    }

    return (
        <div>
            <h2 className='mt-4' style={{ color: 'purple' }}> Please Register</h2>
            <form onSubmit={submitform} className='register mt-4'>
                <input onBlur={handleEmailBlur} className='mb-3' type="email" name="email" id="" placeholder='Enter your Email' required />
                <input onBlur={handlePasswordBlur} className='mb-3' type="password" name="password" id="" placeholder='Password' required />
                <input onBlur={handleConfirmPassBlur} type="password" name="ConfirmPassword" id="" placeholder='Confirm Password' required />

                <Button variant="primary  mx-auto d-block mb-4 mt-3" type="submit">
                    register
                </Button>
                <p className='mt-2'>Have an account? <Link to='/login'>Login</Link></p>
            </form>

            <Social></Social>

        </div>
    );
};

export default Register;