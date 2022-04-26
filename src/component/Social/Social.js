import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-info  mx-auto d-block my-2'>
                <span className='px-2'>Google Sign In</span>
            </button>

        </div>
    );
};

export default Social;