import React, { useEffect, useState } from 'react';
import Volenteer from '../Volenteer/Volenteer';
import './Home.css';

const Home = () => {
    const [voluenteers, setVoluenteers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => setVoluenteers(data))
    }, [])
    return (
        <div className="container mt-5 mb-5">
            <div className='voluenteers'>
                {
                    voluenteers.map(voluenteer =>
                        <Volenteer
                            key={voluenteer._id}
                            voluenteer={voluenteer}
                        >

                        </Volenteer>
                    )
                }
            </div>
        </div>
    );
};

export default Home;