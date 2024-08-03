import app from ".";
import http from "http";
import config, { connectDB } from "./config";
import User from "./models/user";
import { organizations, users } from "./data";
import Organization from "./models/organization";

const PORT = config.port;

http.createServer(app).listen(PORT, () => {
  connectDB();
  console.log(`Server is listening on port:${PORT}`);
  // User.insertMany(users);
  // Organization.insertMany(organizations);
});
