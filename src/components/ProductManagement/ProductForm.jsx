import React, { useState } from 'react';

const ProductForm = ({handleProduct}) => {

    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        console.log(name, price, quantity);
        const product = {
            name,
            price,
            quantity
        }
        // console.log(product);
        
        if (name.length===0) {
            setError('please povide a name')
            return;
        }
        else if (price.length===0){
            setError('please set a price')
            return;
        }
        else if (price.length < 0){
            setError('price cannot be negative')
            return;
        } 
        else {
            setError('')
        }

        handleProduct(product);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Name' />
                <br />
                <input type="text" name="price" id="" placeholder='price' />
                <br />
                <input type="text" name="quantity" id="" placeholder='quantity' />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p><small style={{color: 'red'}}>{error}</small></p>
        </div>
    );
};

export default ProductForm;