import React from 'react';

const Producttable = ({product}) => {
    return (
        <div>
            <h4>Products: {product.length}</h4>
            <table>
                <thead>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        product.map((product, index) => 
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Producttable;