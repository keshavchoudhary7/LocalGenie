import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const uri = process.env.MONGO_URI;
        console.log("MONGO_URI:", uri);

        const conn = await mongoose.connect(uri);
        console.log(`MongoDB connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDb;