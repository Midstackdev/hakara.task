import dotenv from "dotenv";

dotenv.config();

const { PORT, NODE_ENV } = process.env;

export default {
  port: PORT || 5000,
};
