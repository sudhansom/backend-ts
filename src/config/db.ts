import mongoose from "mongoose";
import { dev } from ".";

export const connectDB = async ()=>{
    try{
        await mongoose.connect(dev.db.mongoUrl);
        console.log('connected to mongodb.');
    }catch(err: any){
        console.log('unable to connect mongodb.', err.message)
    }
}