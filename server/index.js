import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDb from "./src/config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const app = express();

connectDb();

app.use(cors());
app.use(helmet());
app.use(morgan("common"));


const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
})