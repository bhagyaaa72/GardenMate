import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected")
    }catch{
        console.log("MongoDB connection failed")
    }
}