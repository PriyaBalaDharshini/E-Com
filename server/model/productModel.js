import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    category: String,
    image: { type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYhiUYI3ZoPTFtX10XD0KYalZFqsg_Auy0Q&s" },
    quantity: Number
});

const Product = mongoose.model('Product', productSchema);
export default Product