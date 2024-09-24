import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModel';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [category, setCategory] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        const fetchProducts = async () => {
            let url = 'http://localhost:8000/products';
            if (category !== 'all') {
                url = `http://localhost:8000/products/category/${category}`;
            }

            try {
                const response = await axios.get(url);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();
    }, [category])

    // Filter products based on search term
    const filteredProduct = products.filter(product =>
        product.title.toLowerCase().includes(searchItem.toLowerCase()));

    // Function to handle opening the modal
    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    // Function to handle closing the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };


    return (
        <div className="container mx-auto p-4">
            <div>E-Commerce Landing Page</div>
            <SearchBar searchItem={searchItem} setSearchItem={setSearchItem} />
            <div className="mb-4">
                <label className="mr-4">Filter by Category:</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="all">All</option>
                    <option value="Kids">Kids</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredProduct.map(product => (
                    <div key={product._id} onClick={() => openModal(product)}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            <ProductModal
                isOpen={isModalOpen}
                onClose={closeModal}
                product={selectedProduct}
            />
        </div>
    )
}

export default Home