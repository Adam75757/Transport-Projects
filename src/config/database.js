import mongoose from "mongoose";

async function Mongo_connect(){

    try {
       await mongoose.connect(process.env.Mongo_url)
        console.log("MongoDB ga ulandi...");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default Mongo_connect