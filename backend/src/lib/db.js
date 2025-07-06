import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDb ${connection.connection.host}`);
  } catch (error) {
    console.log("Failed to connected to MongoDB", error);
    process.exit(1);
  }
};
