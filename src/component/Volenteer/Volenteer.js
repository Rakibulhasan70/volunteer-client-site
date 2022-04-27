import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Volenteer.css'

const Volenteer = (props) => {
    const { _id, text, img } = props.voluenteer
    const navigate = useNavigate();

    const handleId = () => {
        navigate(`/VolenteerRegister/${_id}`)
    }

    return (
        <div className='voluenteer'>
            <img src={img} alt="" />
            <h5 className='mt-2'>{text}</h5>
            <button style={{ backgroundColor: 'lightgray', fontSize: '15px', }} className='border-0 rounded px-3 py-2 mt-2' onClick={() => handleId(_id)}>Details</button>
        </div>
    );
};

export default Volenteer;