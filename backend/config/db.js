import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://Priya:22122002@cluster0.4gllkd3.mongodb.net/tomato-food-delivery-website').then(()=>console.log("DB Connected"));
}