import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('secret').then(()=>console.log("DB Connected"));
}
