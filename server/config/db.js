import mongoose from "mongoose";

//function to connect mongo db
const connectdb = async () => {
    mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));
    await mongoose.connect(`${process.env.MONGO_URI}/job-portal`);
}
export default connectdb