import { useEffect, useState } from 'react';

const UseData = () => {
    const [products, setProdcuts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProdcuts(data)
            })
    }, [])
    return [products, setProdcuts]
};

export default UseData;