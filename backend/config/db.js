import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MongoURI = process.env.MongoDB_URI;
console.log('MongoDB URI:', MongoURI);

const connectDB = async() => {
  try {
    await mongoose.connect(MongoURI);
    console.log('Connected to MongoDB successfully');
  } catch(error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

export default connectDB;