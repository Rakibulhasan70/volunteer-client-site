import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h2 className='mt-4' style={{ color: 'purple' }}> Please Register</h2>
            <form className='register mt-4'>
                <input className='mb-3' type="email" name="email" id="" placeholder='Enter your Email' required />
                <input className='mb-3' type="password" name="password" id="" placeholder='Password' required />
                <input type="password" name="ConfirmPassword" id="" placeholder='Confirm Password' required />

                <p className='mt-2'>Have an account? <Link to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;