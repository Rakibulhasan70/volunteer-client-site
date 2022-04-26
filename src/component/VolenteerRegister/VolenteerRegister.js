import React from 'react';
import { useParams } from 'react-router-dom';

const VolenteerRegister = () => {
    const { volenteerId } = useParams()
    console.log(volenteerId);
    return (
        <div>
            <h2>VolenteerRegister:{volenteerId} </h2>
        </div>
    );
};

export default VolenteerRegister;