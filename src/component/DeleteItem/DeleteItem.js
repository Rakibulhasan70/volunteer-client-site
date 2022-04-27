import React from 'react';
import UseData from '../../Hook/UseData';

const DeleteItem = () => {
    const [products, setProducts] = UseData()

    const handleDelete = (id) => {
        const procced = window.confirm('are you sure')
        if (procced) {
            const url = `http://localhost:5000/data/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining)
                })

        }

    }

    return (
        <div>
            <h2>Delete item</h2>
            {
                products.map(product => <div
                    key={product._id}
                >
                    <h5>{product.text} <button onClick={() => handleDelete(product._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default DeleteItem;