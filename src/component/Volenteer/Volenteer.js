import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Volenteer.css'

const Volenteer = (props) => {
    const { id, text, img } = props.voluenteer
    const navigate = useNavigate();

    const handleId = () => {
        navigate(`/VolenteerRegister/${id}`)
    }

    return (
        <div className='voluenteer'>
            <img src={img} alt="" />
            <h5 className='mt-2'>{text}</h5>
            <button style={{ backgroundColor: 'lightgray', fontSize: '15px', }} className='border-0 rounded px-3 py-2 mt-2' onClick={() => handleId(id)}>Details</button>
        </div>
    );
};

export default Volenteer;