import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const {
  PORT,
  NODE_ENV,
  MONGO_URI,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_DATABASE,
  MONGO_PORT,
} = process.env;

export default {
  port: PORT || 5000,
  mongoUri: process.env.MONGO_URI || "",
  mongoUser: process.env.MONGO_USER || "",
  mongoPassword: process.env.MONGO_PASSWORD || "",
  mongoIp: process.env.MONGO_IP || "",
  mongoPort: process.env.MONGO_PORT || "",
  mongoDatabase: process.env.MONGO_DATABASE || "",
};

export const MONGO_URL = `mongodb://${MONGO_IP}:${MONGO_PORT}/${MONGO_DATABASE}`;

export const connectDB = async () => {
  // configure databse from this file

  try {
    const connect = await mongoose.connect(MONGO_URL);
    console.log("DB connection established");

    return connect;
  } catch (error) {
    console.error("DB connection failed ---" + error);
    process.exit(1);
  }
};

export const closeDB = async () => {
  await mongoose.connection.close();
  console.log("Database disconnected");
};

export const clearDB = async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
};
