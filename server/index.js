import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;
const DB = process.env.DB_URL;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Welcome to Backend"));


mongoose
    .connect(DB)
    .then(() => console.log("DataBase Connected Successfully"))
    .catch((error) => console.log(error.message));

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
