import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        if (!process.env.CONNECTIONSTRING) {
            console.log("It is not defined connection string in env file.");
        }
        const connectionInstnce = await mongoose.connect(process.env.CONNECTIONSTRING!);
        if (!connectionInstnce) {
            console.log("Mongodb is not Connected");
        } else {
            console.log("Mongodb is connected successfully!");
        }
    } catch (error) {
        console.log("Mongodb connections error...", error);
    }
}

export { connectToMongoDB };