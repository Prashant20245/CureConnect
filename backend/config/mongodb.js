import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Daatabase Connected"));
  await mongoose.connect(`${process.env.MONGODB_URL}/cureconnect`);
};

export default connectDB;
