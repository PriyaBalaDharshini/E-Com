import React from 'react';

const ProductModal = ({ isOpen, onClose, product }) => {
    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{product.title}</h2>
                    <button className="text-red-500" onClick={onClose}>
                        Close
                    </button>
                </div>
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover mb-4"
                />
                <p>{product.description}</p>
                <p className="font-bold text-lg mt-4">${product.price}</p>
                <p>Available Quantity: {product.quantity}</p>
            </div>
        </div>
    );
};

export default ProductModal;
