import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:138141147@cluster0.qnyyty4.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}