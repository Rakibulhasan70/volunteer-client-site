import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2 className='mt-4' style={{ color: 'purple' }}> Please Login</h2>
            <form className='register mt-4'>
                <input className='mb-3' type="email" name="email" id="" placeholder='Enter your Email' required />
                <input className='mb-3' type="password" name="password" id="" placeholder='Password' required />
                <p className='mt-2'>Have an account? <Link to='/register'>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;