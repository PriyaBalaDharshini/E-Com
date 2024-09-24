import React from 'react'
import ProductModel from './ProductModel';

const ProductCard = ({ product }) => {
    return (
        <div className="border p-4 rounded-lg">
            <img src={product.image} alt={product.title} className="h-48  w-48 object-cover mb-4" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-gray-500">${product.price}</p>
        </div>
    );
}

export default ProductCard