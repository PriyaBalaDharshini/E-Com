import React from 'react';

const ProductModal = ({ isOpen, onClose, product }) => {
    if (!isOpen || !product) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{product.title}</h2>
                    <button onClick={onClose}>Close</button>
                </div>
                <img src={product.image} alt={product.title} />
                <p>{product.description}</p>
                <p className="price">{product.price}</p>
                <p>Available Quantity: {product.quantity}</p>
            </div>
        </div>
    );
};

export default ProductModal;
