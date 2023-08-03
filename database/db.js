import mongoose from "mongoose";

const connection=async (URL)=>{
    
    try {
        await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser: true});
        console.log("Database Connected Succesfully");
    } catch (error) {
        console.log("Error while connecting database",error);
    }
}

export default connection;