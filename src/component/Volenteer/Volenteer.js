import React from 'react';
import { Link } from 'react-router-dom';
import './Volenteer.css'

const Volenteer = (props) => {
    const { text, img } = props.voluenteer
    return (
        <div className='voluenteer'>
            <img src={img} alt="" />
            <h5 className='mt-2'>{text}</h5>
            <Link to='/VolenteerRegister'>  <button style={{ backgroundColor: 'lightgray', fontSize: '15px', }} className='border-0 rounded px-3 py-2 mt-2   '>Details</button></Link>
        </div>
    );
};

export default Volenteer;