import React, { useState } from 'react';
import ProductForm from './ProductForm';
import Producttable from './Producttable';

const ProductManagement = () => {
    const [product, setproduct] = useState([])
    const handleProduct = newProduct => {
        const newProducts = [...product, newProduct]
        setproduct(newProducts)
    }
    return (
        <div>
            <ProductForm handleProduct={handleProduct}></ProductForm>
            <Producttable product={product}></Producttable>
        </div>
    );
};

export default ProductManagement;