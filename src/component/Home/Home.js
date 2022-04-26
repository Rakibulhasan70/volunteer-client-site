import React, { useEffect, useState } from 'react';
import Volenteer from '../Volenteer/Volenteer';
import './Home.css';

const Home = () => {
    const [voluenteers, setVoluenteers] = useState([])
    useEffect(() => {
        fetch('volenteer.json')
            .then(res => res.json())
            .then(data => setVoluenteers(data))
    }, [])
    return (
        <div className="container mt-5 mb-5">
            <div className='voluenteers'>
                {
                    voluenteers.map(voluenteer =>
                        <Volenteer
                            key={voluenteer.id}
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