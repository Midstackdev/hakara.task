import { Router } from "express";
import homeRoutes from "./home";

const routes = Router();

routes.use("/home", homeRoutes);

export default routes;
