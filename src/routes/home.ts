import { Router } from "express";
import * as controllers from "../controllers/home";

const routes = Router();

routes.route("/").get(controllers.index);

export default routes;
