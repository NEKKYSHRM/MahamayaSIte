import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

export async function connect() {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("\nMongoDB connected: ", connectionInstance.connection.host);
        
    } catch (error) {
        console.log("MongoDB Error: ", error);
        process.exit(1)        
    }
}