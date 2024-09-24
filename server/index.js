import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './route/productRoute.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;
const DB = process.env.DB_URL;

app.use(express.json());
app.use(cors({
    origin: 'https://ubiquitous-capybara-58f811.netlify.app'
}));
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => res.send("Welcome to Backend"));

app.use("/products", productRoutes)

mongoose
    .connect(DB)
    .then(() => console.log("DataBase Connected Successfully"))
    .catch((error) => console.log(error.message));

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
